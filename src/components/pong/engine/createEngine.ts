import * as THREE from "three";
import { createBall } from "./ball";
import { createPaddle } from "./paddle";
import { createScene, createTable } from "./scene";
import type { EngineCallbacks, EngineHandle, Keys } from "./types";

export function createEngine(
  canvas: HTMLCanvasElement,
  callbacks: EngineCallbacks,
): EngineHandle {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  const { scene, camera, dispose: disposeScene } = createScene(renderer);
  createTable(scene);

  const playerPaddle = createPaddle(scene, "player");
  const botPaddle = createPaddle(scene, "bot");
  const ball = createBall(scene);

  const keys: Keys = { a: false, d: false };
  let paused = false;
  let rafId = 0;

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === "a" || e.key === "A") keys.a = true;
    if (e.key === "d" || e.key === "D") keys.d = true;
  };
  const onKeyup = (e: KeyboardEvent) => {
    if (e.key === "a" || e.key === "A") keys.a = false;
    if (e.key === "d" || e.key === "D") keys.d = false;
  };

  window.addEventListener("keydown", onKeydown);
  window.addEventListener("keyup", onKeyup);

  function loop() {
    rafId = requestAnimationFrame(loop);

    playerPaddle.update(ball.x, keys, paused);
    botPaddle.update(ball.x, keys, paused);

    const result = ball.update(playerPaddle, botPaddle, paused);
    if (result === "player") callbacks.onPlayerScore();
    if (result === "bot") callbacks.onBotScore();

    renderer.render(scene, camera);
  }
  loop();

  return {
    setPaused: (next) => {
      paused = next;
    },
    destroy: () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("keyup", onKeyup);
      disposeScene();
      renderer.dispose();
    },
  };
}
