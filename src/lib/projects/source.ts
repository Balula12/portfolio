import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { projectFrontmatterSchema } from "./schema";
import type { Project } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "projects");
const FILE_PATTERN = /^(.+?)\.([^.]+)\.mdx$/;

export async function readProjectFile(
  slug: string,
  locale: string,
): Promise<Project | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.${locale}.mdx`);
  let raw: string;
  try {
    raw = await fs.readFile(filePath, "utf-8");
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }

  const { data, content } = matter(raw);
  const frontmatter = projectFrontmatterSchema.parse({ ...data, slug });
  return { ...frontmatter, locale, content };
}

export async function listProjectSlugs(): Promise<string[]> {
  const entries = await fs.readdir(CONTENT_DIR);
  const slugs = new Set<string>();
  for (const entry of entries) {
    const match = FILE_PATTERN.exec(entry);
    if (match) slugs.add(match[1]);
  }
  return [...slugs];
}
