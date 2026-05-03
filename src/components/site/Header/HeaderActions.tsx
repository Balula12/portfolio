import { LocaleSwitcher } from "@/components/site/LocaleSwitcher";
import { ThemeToggle } from "@/components/site/ThemeToggle";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-1">
      <LocaleSwitcher />
      <ThemeToggle />
    </div>
  );
}
