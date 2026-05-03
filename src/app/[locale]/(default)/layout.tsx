import { setRequestLocale } from "next-intl/server";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function DefaultChromeLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
