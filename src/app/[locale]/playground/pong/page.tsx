import { setRequestLocale } from "next-intl/server";
import { PongCanvas } from "@/components/pong/PongCanvas";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PongPlaygroundPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PongCanvas />;
}
