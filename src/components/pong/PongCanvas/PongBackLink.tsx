import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routes } from "@/lib/routes";

export function PongBackLink() {
  const t = useTranslations("pong");

  return (
    <Link
      href={routes.projects.detail("ping-3d")}
      className="fixed left-6 top-4 z-10 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-white/70 transition-colors hover:bg-white/20 hover:text-white"
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      {t("back")}
    </Link>
  );
}
