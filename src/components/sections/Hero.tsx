import { getTranslations } from "next-intl/server";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-start gap-6 px-6 pt-20 pb-16 sm:pt-32">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {t("eyebrow")}
      </p>
      <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
        {t("title")}
      </h1>
      <p className="max-w-2xl text-balance text-lg text-muted-foreground">
        {t("subtitle")}
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Link href="/projetos" className={buttonVariants({ size: "lg" })}>
          {t("ctaPrimary")}
        </Link>
        <Link href="/contato" className={buttonVariants({ variant: "outline", size: "lg" })}>
          {t("ctaSecondary")}
        </Link>
      </div>
    </section>
  );
}
