"use client";

import { Pause, Play } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  paused: boolean;
  onToggle: () => void;
};

export function PongPauseButton({ paused, onToggle }: Props) {
  const t = useTranslations("pong");

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={paused ? t("resume") : t("pause")}
      className="fixed left-1/2 top-4 z-10 flex h-9 w-11 -translate-x-1/2 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/20"
    >
      {paused ? (
        <Play className="h-3.5 w-3.5 fill-white" />
      ) : (
        <Pause className="h-3.5 w-3.5 fill-white" />
      )}
    </button>
  );
}
