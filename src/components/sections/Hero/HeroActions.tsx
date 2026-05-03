import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/routes";

export async function HeroActions() {
  const t = await getTranslations("hero");

  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      <Link
        href={routes.projects.index}
        className="group inline-flex h-11 items-center gap-2 rounded-full bg-brand px-5 text-sm font-medium text-brand-foreground transition-all hover:bg-brand/90 hover:gap-3 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand/40"
      >
        {t("ctaPrimary")}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
      <Link
        href={routes.contact}
        className={buttonVariants({
          variant: "outline",
          size: "lg",
          className: "h-11 rounded-full px-5",
        })}
      >
        {t("ctaSecondary")}
      </Link>
    </div>
  );
}
