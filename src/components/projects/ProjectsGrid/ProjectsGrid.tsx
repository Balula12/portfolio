import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/lib/projects";

type Props = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: Props) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
