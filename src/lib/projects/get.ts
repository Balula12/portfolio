import "server-only";
import { readProjectFile } from "./source";
import type { Project } from "./types";

export async function getProject(
  slug: string,
  locale: string,
): Promise<Project | null> {
  return readProjectFile(slug, locale);
}
