import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";

type Props = {
  href: string;
};

export async function ProjectDetailPlayground({ href }: Props) {
  const t = await getTranslations("pong");

  return (
    <section className="mb-10">
      <Link
        href={href}
        className={buttonVariants({ size: "lg", className: "gap-2" })}
      >
        {t("playCta")}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
