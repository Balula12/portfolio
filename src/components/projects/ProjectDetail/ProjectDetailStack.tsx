import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";

type Props = {
  items: string[];
};

export async function ProjectDetailStack({ items }: Props) {
  const t = await getTranslations("project");

  return (
    <section className="mb-10">
      <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {t("stack")}
      </h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((tech) => (
          <Badge key={tech} variant="secondary" className="font-normal">
            {tech}
          </Badge>
        ))}
      </div>
    </section>
  );
}
