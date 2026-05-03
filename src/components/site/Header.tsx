import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Gustavo Balula
        </Link>

        <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
          <Link href="/projetos" className="transition-colors hover:text-foreground">
            {t("projects")}
          </Link>
          <Link href="/sobre" className="transition-colors hover:text-foreground">
            {t("about")}
          </Link>
          <Link href="/contato" className="transition-colors hover:text-foreground">
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
