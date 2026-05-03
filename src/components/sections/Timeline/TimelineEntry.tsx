import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";

type Props = {
  entryKey: string;
  current: boolean;
};

export async function TimelineEntry({ entryKey, current }: Props) {
  const t = await getTranslations("experience");

  return (
    <li className="border-l border-border pl-6 sm:grid sm:grid-cols-[160px_1fr] sm:gap-8 sm:border-l-0 sm:pl-0">
      <div className="mb-2 flex items-center gap-2 sm:mb-0 sm:flex-col sm:items-start">
        <span className="font-mono text-xs text-muted-foreground">
          {t(`${entryKey}.period`)}
        </span>
        {current && (
          <Badge variant="outline" className="text-xs">
            {t("current")}
          </Badge>
        )}
      </div>
      <div>
        <h3 className="text-lg font-medium">
          {t(`${entryKey}.role`)}{" "}
          <span className="text-muted-foreground">
            · {t(`${entryKey}.company`)}
          </span>
        </h3>
        <p className="mt-2 text-muted-foreground">
          {t(`${entryKey}.summary`)}
        </p>
      </div>
    </li>
  );
}
