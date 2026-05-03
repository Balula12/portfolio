import { getTranslations } from "next-intl/server";
import { HeroActions } from "./HeroActions";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-muted blur-[120px]" />
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-8 px-6 pt-24 pb-20 sm:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-muted px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
          <span className="size-1.5 animate-pulse rounded-full bg-brand" />
          {t("eyebrow")}
        </span>

        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          {t("title")}
        </h1>

        <p className="max-w-2xl text-balance text-xl leading-relaxed text-muted-foreground">
          {t("subtitle")}
        </p>

        <HeroActions />
      </div>
    </section>
  );
}
