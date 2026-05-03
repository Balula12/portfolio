import { getTranslations } from "next-intl/server";
import { HeroActions } from "./HeroActions";

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
      <HeroActions />
    </section>
  );
}
