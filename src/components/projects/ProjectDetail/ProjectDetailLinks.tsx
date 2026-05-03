import { ExternalLink } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { getTranslations } from "next-intl/server";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/lib/projects";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type LinkItem = {
  href: string;
  label: string;
  Icon: IconComponent;
};

type Props = {
  links: NonNullable<Project["links"]>;
};

export async function ProjectDetailLinks({ links }: Props) {
  const t = await getTranslations("project.links");

  const items: LinkItem[] = [];
  if (links.live)
    items.push({ href: links.live, label: t("live"), Icon: ExternalLink });
  if (links.demo)
    items.push({ href: links.demo, label: t("demo"), Icon: ExternalLink });
  if (links.source)
    items.push({ href: links.source, label: t("source"), Icon: GithubIcon });

  if (items.length === 0) return null;

  return (
    <section className="mb-10 flex flex-wrap gap-3">
      {items.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-muted"
        >
          <Icon className="size-4" />
          {label}
        </a>
      ))}
    </section>
  );
}
