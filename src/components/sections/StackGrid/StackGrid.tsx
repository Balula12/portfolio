import { getTranslations } from "next-intl/server";
import { STACK, type StackCategoryKey } from "./data";
import { StackCategory } from "./StackCategory";

export async function StackGrid() {
  const t = await getTranslations("stack");
  const categories = Object.keys(STACK) as StackCategoryKey[];

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight">{t("title")}</h2>
        <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {categories.map((cat) => (
          <StackCategory
            key={cat}
            title={t(`categories.${cat}`)}
            items={STACK[cat]}
          />
        ))}
      </div>
    </section>
  );
}
