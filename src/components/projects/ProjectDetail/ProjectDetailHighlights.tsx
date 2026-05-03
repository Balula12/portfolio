import { getTranslations } from "next-intl/server";

type Props = {
  items: string[];
};

export async function ProjectDetailHighlights({ items }: Props) {
  if (items.length === 0) return null;
  const t = await getTranslations("project");

  return (
    <section className="mb-10">
      <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {t("highlights")}
      </h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
