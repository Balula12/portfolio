import { z } from "zod";

export const projectFrontmatterSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  role: z.string(),
  period: z.string(),
  stack: z.array(z.string()).min(1),
  highlights: z.array(z.string()).default([]),
  cover: z.string().optional(),
  links: z
    .object({
      source: z.string().url().optional(),
      live: z.string().url().optional(),
      demo: z.string().url().optional(),
    })
    .optional(),
  featured: z.boolean().default(false),
  order: z.number().default(99),
});

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;
