import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactLinks } from "@/components/contact/ContactLinks";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">{t("subtitle")}</p>
      <div className="mt-10">
        <ContactLinks />
      </div>
    </section>
  );
}
