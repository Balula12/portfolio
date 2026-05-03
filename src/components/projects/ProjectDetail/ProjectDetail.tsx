import type { Project } from "@/lib/projects";
import { MDXContent } from "@/components/projects/MDXContent";
import { ProjectDetailHero } from "./ProjectDetailHero";
import { ProjectDetailHighlights } from "./ProjectDetailHighlights";
import { ProjectDetailLinks } from "./ProjectDetailLinks";
import { ProjectDetailStack } from "./ProjectDetailStack";

type Props = {
  project: Project;
};

export function ProjectDetail({ project }: Props) {
  const hasContent = project.content.trim().length > 0;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <ProjectDetailHero
        title={project.title}
        summary={project.summary}
        role={project.role}
        period={project.period}
      />
      <ProjectDetailHighlights items={project.highlights} />
      <ProjectDetailStack items={project.stack} />
      {project.links && <ProjectDetailLinks links={project.links} />}
      {hasContent && (
        <div className="mt-10 border-t border-border pt-10">
          <MDXContent source={project.content} />
        </div>
      )}
    </article>
  );
}
