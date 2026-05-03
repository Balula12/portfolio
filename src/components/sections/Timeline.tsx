import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";

export async function Timeline() {
  const t = await getTranslations("experience");

  const entries = [
    { key: "ggCheckout", current: true },
    { key: "freelance", current: false },
  ] as const;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="mb-10 text-2xl font-semibold tracking-tight">
        {t("title")}
      </h2>

      <ol className="space-y-10">
        {entries.map((entry) => (
          <li
            key={entry.key}
            className="border-l border-border pl-6 sm:grid sm:grid-cols-[160px_1fr] sm:gap-8 sm:border-l-0 sm:pl-0"
          >
            <div className="mb-2 flex items-center gap-2 sm:mb-0 sm:flex-col sm:items-start">
              <span className="font-mono text-xs text-muted-foreground">
                {t(`${entry.key}.period`)}
              </span>
              {entry.current && (
                <Badge variant="outline" className="text-xs">
                  {t("current")}
                </Badge>
              )}
            </div>
            <div>
              <h3 className="text-lg font-medium">
                {t(`${entry.key}.role`)}{" "}
                <span className="text-muted-foreground">
                  · {t(`${entry.key}.company`)}
                </span>
              </h3>
              <p className="mt-2 text-muted-foreground">
                {t(`${entry.key}.summary`)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
