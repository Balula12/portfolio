import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/lib/projects";
import { routes } from "@/lib/routes";
import { ProjectCardMeta } from "./ProjectCardMeta";

const PREVIEW_STACK_LIMIT = 4;

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <Link
      href={routes.projects.detail(project.slug)}
      className="group block focus-visible:outline-none"
    >
      <Card className="h-full transition-colors group-hover:border-foreground/30 group-focus-visible:border-foreground/40">
        <CardHeader>
          <CardTitle className="text-lg group-hover:underline underline-offset-4">
            {project.title}
          </CardTitle>
          <CardDescription>{project.summary}</CardDescription>
        </CardHeader>
        <CardContent>
          <ProjectCardMeta
            period={project.period}
            stack={project.stack.slice(0, PREVIEW_STACK_LIMIT)}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
