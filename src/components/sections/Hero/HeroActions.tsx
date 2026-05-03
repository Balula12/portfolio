import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/routes";

export async function HeroActions() {
  const t = await getTranslations("hero");

  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <Link
        href={routes.projects.index}
        className={buttonVariants({ size: "lg" })}
      >
        {t("ctaPrimary")}
      </Link>
      <Link
        href={routes.contact}
        className={buttonVariants({ variant: "outline", size: "lg" })}
      >
        {t("ctaSecondary")}
      </Link>
    </div>
  );
}
