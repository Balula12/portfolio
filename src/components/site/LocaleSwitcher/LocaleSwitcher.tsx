"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

const LOCALE_LABELS: Record<string, string> = {
  "pt-BR": "PT",
  en: "EN",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("locale");

  const otherLocale = routing.locales.find((l) => l !== locale) ?? locale;

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={t("switch")}
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          router.replace(pathname, { locale: otherLocale });
        });
      }}
    >
      {LOCALE_LABELS[otherLocale] ?? otherLocale}
    </Button>
  );
}
