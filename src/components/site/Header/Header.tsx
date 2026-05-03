import { Link } from "@/i18n/navigation";
import { routes } from "@/lib/routes";
import { HeaderActions } from "./HeaderActions";
import { HeaderNav } from "./HeaderNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <Link
          href={routes.home}
          className="text-sm font-semibold tracking-tight"
        >
          Gustavo Balula
        </Link>
        <HeaderNav />
        <HeaderActions />
      </div>
    </header>
  );
}
