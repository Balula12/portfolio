import { useTranslations } from "next-intl";

export function PongPauseOverlay() {
  const t = useTranslations("pong");

  return (
    <div className="pointer-events-none fixed inset-0 z-10 flex flex-col items-center justify-center bg-black/60 text-white">
      <h2 className="mb-3 text-5xl font-bold tracking-[0.25em]">
        {t("paused")}
      </h2>
      <p className="text-sm tracking-widest text-white/35">
        {t("resumeHint")}
      </p>
    </div>
  );
}
