import * as THREE from "three";
import { PADDLE_Z } from "./constants";
import type { Ball } from "./types";

const BALL_RADIUS = 0.25;
const BALL_Y = 0.3;
const X_BOUND = 4.0;
const INITIAL_SPEED = 0.09;
const MAX_SPEED = 0.22;
const SPEED_INC = 0.008;
const TRAIL_LEN = 12;
const HIT_Z = PADDLE_Z - 0.05 - BALL_RADIUS;

type TrailPoint = { x: number; z: number };

export function createBall(scene: THREE.Scene): Ball {
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(BALL_RADIUS, 28, 28),
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 0.25,
      roughness: 0.3,
    }),
  );
  mesh.castShadow = true;
  scene.add(mesh);

  const trailMeshes: THREE.Mesh<
    THREE.SphereGeometry,
    THREE.MeshBasicMaterial
  >[] = Array.from({ length: TRAIL_LEN }, (_, i) => {
    const r = BALL_RADIUS * ((i + 1) / TRAIL_LEN) * 0.8;
    const tm = new THREE.Mesh(
      new THREE.SphereGeometry(r, 8, 8),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0,
      }),
    );
    tm.visible = false;
    scene.add(tm);
    return tm;
  });

  const trail: TrailPoint[] = [];

  const ball: Ball = {
    x: 0,
    z: 0,
    dirX: 0.8,
    dirZ: 1,
    speed: INITIAL_SPEED,

    reset() {
      this.x = 0;
      this.z = 0;
      this.speed = INITIAL_SPEED;
      this.dirZ = Math.random() > 0.5 ? 1 : -1;
      this.dirX = (Math.random() > 0.5 ? 1 : -1) * (0.5 + Math.random() * 0.5);
      trail.length = 0;
      for (const tm of trailMeshes) tm.visible = false;
      mesh.position.set(0, BALL_Y, 0);
    },

    update(playerPaddle, botPaddle, paused) {
      if (paused) return null;

      trail.push({ x: this.x, z: this.z });
      if (trail.length > TRAIL_LEN) trail.shift();

      trailMeshes.forEach((tm, i) => {
        if (i < trail.length) {
          const prog = (i + 1) / trail.length;
          tm.position.set(trail[i].x, BALL_Y, trail[i].z);
          tm.material.opacity = prog * 0.3;
          tm.visible = true;
        } else {
          tm.visible = false;
        }
      });

      this.x += this.dirX * this.speed;
      this.z += this.dirZ * this.speed;

      if (this.x - BALL_RADIUS < -X_BOUND && this.dirX < 0) this.dirX *= -1;
      if (this.x + BALL_RADIUS > X_BOUND && this.dirX > 0) this.dirX *= -1;

      // Colisão com a raquete do jogador (frente, dirZ > 0)
      if (this.dirZ > 0 && this.z >= HIT_Z) {
        if (
          Math.abs(this.x - playerPaddle.x) <=
          playerPaddle.radius + BALL_RADIUS
        ) {
          this.dirZ = -1;
          this.z = HIT_Z - 0.01;
          if (this.speed < MAX_SPEED) this.speed += SPEED_INC;
        } else {
          this.reset();
          return "bot";
        }
      }

      // Colisão com a raquete do bot (fundo, dirZ < 0)
      if (this.dirZ < 0 && this.z <= -HIT_Z) {
        if (
          Math.abs(this.x - botPaddle.x) <=
          botPaddle.radius + BALL_RADIUS
        ) {
          this.dirZ = 1;
          this.z = -HIT_Z + 0.01;
          if (this.speed < MAX_SPEED) this.speed += SPEED_INC;
        } else {
          this.reset();
          return "player";
        }
      }

      mesh.position.set(this.x, BALL_Y, this.z);
      return null;
    },
  };

  ball.reset();
  return ball;
}
