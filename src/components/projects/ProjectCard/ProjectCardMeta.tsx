import { Badge } from "@/components/ui/badge";

type Props = {
  period: string;
  stack: readonly string[];
};

export function ProjectCardMeta({ period, stack }: Props) {
  return (
    <div className="space-y-3">
      <p className="font-mono text-xs text-muted-foreground">{period}</p>
      <div className="flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="font-normal text-[11px]"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
