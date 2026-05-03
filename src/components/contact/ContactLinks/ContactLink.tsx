import type { ComponentType } from "react";

type Props = {
  href: string;
  label: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
  external?: boolean;
};

export function ContactLink({
  href,
  label,
  description,
  Icon,
  external,
}: Props) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-4 rounded-lg border border-border p-4 transition-colors hover:border-foreground/30 hover:bg-muted/40"
    >
      <Icon className="mt-1 h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
      <div>
        <p className="font-medium">{label}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
      </div>
    </a>
  );
}
