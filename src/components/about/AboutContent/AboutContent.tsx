import { getTranslations } from "next-intl/server";

const PARAGRAPH_KEYS = ["p1", "p2", "p3"] as const;

export async function AboutContent() {
  const t = await getTranslations("about");

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {t("title")}
      </h1>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
        {PARAGRAPH_KEYS.map((key) => (
          <p key={key}>{t(key)}</p>
        ))}
      </div>
    </section>
  );
}
