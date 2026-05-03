import { useTranslations } from "next-intl";

export function PongControls() {
  const t = useTranslations("pong");

  return (
    <div className="pointer-events-none fixed bottom-5 left-6 text-sm leading-loose text-white/25">
      <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono">A</kbd> /{" "}
      <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono">D</kbd> —{" "}
      {t("controls.move")}
      <br />
      <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono">Space</kbd> —{" "}
      {t("controls.pause")}
    </div>
  );
}
