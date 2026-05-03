"use client";

import { useEffect, useRef, useState } from "react";
import { createEngine, type EngineHandle } from "@/components/pong/engine";
import { PongBackLink } from "./PongBackLink";
import { PongControls } from "./PongControls";
import { PongPauseButton } from "./PongPauseButton";
import { PongPauseOverlay } from "./PongPauseOverlay";
import { PongScore } from "./PongScore";

type Score = { player: number; bot: number };

const INITIAL_SCORE: Score = { player: 0, bot: 0 };

export function PongCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<EngineHandle | null>(null);
  const [score, setScore] = useState<Score>(INITIAL_SCORE);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = createEngine(canvasRef.current, {
      onPlayerScore: () =>
        setScore((prev) => ({ ...prev, player: prev.player + 1 })),
      onBotScore: () => setScore((prev) => ({ ...prev, bot: prev.bot + 1 })),
    });
    engineRef.current = engine;

    return () => {
      engine.destroy();
      engineRef.current = null;
    };
  }, []);

  useEffect(() => {
    engineRef.current?.setPaused(paused);
  }, [paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== " ") return;
      e.preventDefault();
      setPaused((prev) => !prev);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#0d1117]">
      <canvas ref={canvasRef} className="block" />
      <PongScore player={score.player} bot={score.bot} />
      <PongBackLink />
      <PongPauseButton
        paused={paused}
        onToggle={() => setPaused((prev) => !prev)}
      />
      {paused && <PongPauseOverlay />}
      <PongControls />
    </div>
  );
}
