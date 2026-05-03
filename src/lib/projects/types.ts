import type { ProjectFrontmatter } from "./schema";

export type Project = ProjectFrontmatter & {
  locale: string;
  content: string;
};
