import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routes } from "@/lib/routes";

export async function HeaderNav() {
  const t = await getTranslations("nav");

  const items = [
    { href: routes.projects.index, label: t("projects") },
    { href: routes.about, label: t("about") },
    { href: routes.contact, label: t("contact") },
  ];

  return (
    <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="transition-colors hover:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
