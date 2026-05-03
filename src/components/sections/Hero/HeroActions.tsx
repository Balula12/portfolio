import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routes } from "@/lib/routes";

export async function HeroActions() {
  const t = await getTranslations("hero");

  return (
    <div className="flex flex-wrap gap-2 font-mono">
      <Link
        href={routes.projects.index}
        className="group inline-flex items-center gap-2 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-300 transition-colors hover:bg-emerald-500/20"
      >
        ./projetos
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
      <Link
        href={routes.contact}
        className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-transparent px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:bg-zinc-800"
      >
        ./contato
      </Link>
    </div>
  );
}
