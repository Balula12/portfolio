import { getTranslations } from "next-intl/server";
import { HeroActions } from "./HeroActions";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="border-b-2 border-foreground bg-yellow-300 dark:bg-yellow-400">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-12 gap-4 px-6 pt-24 pb-20 sm:pt-32">
        <div className="col-span-12 sm:col-span-9">
          <p className="mb-6 inline-block border-2 border-foreground bg-foreground px-3 py-1 font-mono text-xs uppercase tracking-widest text-background">
            {t("eyebrow")}
          </p>

          <h1 className="font-mono text-5xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl">
            {t("title")}
          </h1>
        </div>

        <div className="col-span-12 mt-2 sm:col-span-3 sm:mt-0 sm:text-right">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/70">
            ★ 2026
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-foreground/70">
            Santos · BR
          </p>
        </div>

        <div className="col-span-12 mt-8 sm:col-span-8">
          <p className="font-mono text-base leading-relaxed text-foreground sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="col-span-12 mt-10">
          <HeroActions />
        </div>
      </div>
    </section>
  );
}
