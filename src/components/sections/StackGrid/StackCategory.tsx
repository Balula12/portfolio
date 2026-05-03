import { Badge } from "@/components/ui/badge";

type Props = {
  title: string;
  items: readonly string[];
};

export function StackCategory({ title, items }: Props) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <Badge key={tech} variant="secondary" className="font-normal">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
