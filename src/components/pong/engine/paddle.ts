import * as THREE from "three";
import { DISC_RADIUS, PADDLE_Z } from "./constants";
import type { Paddle, Side } from "./types";

const DISC_THICKNESS = 0.1;
const HANDLE_LENGTH = 0.85;
const DISC_CENTER_Y = 0.78;
const X_LIMIT = 3.6;
const PLAYER_SPEED = 0.1;
const BOT_SPEED = 0.075;

export function createPaddle(scene: THREE.Scene, side: Side): Paddle {
  const isPlayer = side === "player";
  const group = new THREE.Group();

  const headGeom = new THREE.CylinderGeometry(
    DISC_RADIUS,
    DISC_RADIUS,
    DISC_THICKNESS,
    40,
  );
  const headColor = isPlayer ? 0xd62828 : 0x2979ff;
  const headMat = new THREE.MeshStandardMaterial({
    color: headColor,
    roughness: 0.4,
    metalness: 0.05,
    emissive: headColor,
    emissiveIntensity: 0.12,
  });
  const head = new THREE.Mesh(headGeom, headMat);
  head.rotation.x = Math.PI / 2;
  head.position.y = DISC_CENTER_Y;
  head.castShadow = true;
  group.add(head);

  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(DISC_RADIUS, 0.03, 8, 40),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 }),
  );
  rim.position.y = DISC_CENTER_Y;
  group.add(rim);

  const handle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.07, 0.09, HANDLE_LENGTH, 12),
    new THREE.MeshStandardMaterial({ color: 0x5c3317, roughness: 0.85 }),
  );
  handle.position.y = DISC_CENTER_Y - DISC_RADIUS - HANDLE_LENGTH / 2 + 0.06;
  handle.castShadow = true;
  group.add(handle);

  group.position.set(0, 0, isPlayer ? PADDLE_Z : -PADDLE_Z);
  scene.add(group);

  const speed = isPlayer ? PLAYER_SPEED : BOT_SPEED;

  const paddle: Paddle = {
    mesh: group,
    x: 0,
    radius: DISC_RADIUS,

    update(ballX, keys, paused) {
      if (paused) return;

      if (isPlayer) {
        if (keys.a) this.x -= speed;
        if (keys.d) this.x += speed;
      } else {
        const diff = ballX - this.x;
        this.x += Math.sign(diff) * Math.min(Math.abs(diff), speed);
      }

      this.x = Math.max(-X_LIMIT, Math.min(X_LIMIT, this.x));
      group.position.x = this.x;
    },
  };

  return paddle;
}
