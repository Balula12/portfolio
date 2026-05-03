import "server-only";
import { listProjectSlugs, readProjectFile } from "./source";
import type { Project } from "./types";

export async function listProjects(locale: string): Promise<Project[]> {
  const slugs = await listProjectSlugs();
  const projects = await Promise.all(
    slugs.map((slug) => readProjectFile(slug, locale)),
  );
  return projects
    .filter((project): project is Project => project !== null)
    .sort((a, b) => a.order - b.order);
}
