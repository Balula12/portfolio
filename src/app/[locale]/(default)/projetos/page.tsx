import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { listProjects } from "@/lib/projects";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [projects, t] = await Promise.all([
    listProjects(locale),
    getTranslations("projects"),
  ]);

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        {t("subtitle")}
      </p>
      <div className="mt-12">
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
}
