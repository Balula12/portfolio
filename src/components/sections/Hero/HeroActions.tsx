import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routes } from "@/lib/routes";

export async function HeroActions() {
  const t = await getTranslations("hero");

  return (
    <div className="flex flex-wrap gap-0 -mb-px">
      <Link
        href={routes.projects.index}
        className="group inline-flex items-center gap-3 border-2 border-foreground bg-foreground px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest text-background transition-all hover:gap-4 hover:bg-background hover:text-foreground"
      >
        {t("ctaPrimary")}
        <ArrowRight className="h-4 w-4" />
      </Link>
      <Link
        href={routes.contact}
        className="group inline-flex items-center gap-3 border-2 border-l-0 border-foreground bg-transparent px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background"
      >
        {t("ctaSecondary")}
      </Link>
    </div>
  );
}
