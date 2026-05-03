import { getTranslations } from "next-intl/server";
import { TIMELINE_ENTRIES } from "./data";
import { TimelineEntry } from "./TimelineEntry";

export async function Timeline() {
  const t = await getTranslations("experience");

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="mb-10 text-2xl font-semibold tracking-tight">
        {t("title")}
      </h2>

      <ol className="space-y-10">
        {TIMELINE_ENTRIES.map((entry) => (
          <TimelineEntry
            key={entry.key}
            entryKey={entry.key}
            current={entry.current}
          />
        ))}
      </ol>
    </section>
  );
}
