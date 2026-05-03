import type * as THREE from "three";

export type Side = "player" | "bot";

export type ScoreResult = "player" | "bot" | null;

export type Keys = {
  a: boolean;
  d: boolean;
};

export type Paddle = {
  mesh: THREE.Group;
  x: number;
  radius: number;
  update: (ballX: number, keys: Keys, paused: boolean) => void;
};

export type Ball = {
  x: number;
  z: number;
  dirX: number;
  dirZ: number;
  speed: number;
  reset: () => void;
  update: (
    playerPaddle: Paddle,
    botPaddle: Paddle,
    paused: boolean,
  ) => ScoreResult;
};

export type EngineCallbacks = {
  onPlayerScore: () => void;
  onBotScore: () => void;
};

export type EngineHandle = {
  setPaused: (paused: boolean) => void;
  destroy: () => void;
};
