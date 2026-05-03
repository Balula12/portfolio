import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { routing } from "@/i18n/routing";
import { getProject, listProjectSlugs } from "@/lib/projects";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await listProjectSlugs();
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = await getProject(slug, locale);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
