import * as THREE from "three";
import { BACKGROUND_COLOR } from "./constants";

type SceneSetup = {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  dispose: () => void;
};

export function createScene(renderer: THREE.WebGLRenderer): SceneSetup {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BACKGROUND_COLOR);
  scene.fog = new THREE.FogExp2(BACKGROUND_COLOR, 0.028);

  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  );
  camera.position.set(0, 10, 16);
  camera.lookAt(0, 0, 0);

  scene.add(new THREE.AmbientLight(0x8899bb, 0.5));

  const mainLight = new THREE.DirectionalLight(0xffffff, 1.0);
  mainLight.position.set(2, 10, 4);
  mainLight.castShadow = true;
  mainLight.shadow.mapSize.set(2048, 2048);
  mainLight.shadow.camera.near = 0.5;
  mainLight.shadow.camera.far = 30;
  mainLight.shadow.camera.left = -10;
  mainLight.shadow.camera.right = 10;
  mainLight.shadow.camera.top = 10;
  mainLight.shadow.camera.bottom = -10;
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0x4466aa, 0.3);
  fillLight.position.set(-3, 5, -6);
  scene.add(fillLight);

  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener("resize", handleResize);

  const dispose = () => {
    window.removeEventListener("resize", handleResize);
  };

  return { scene, camera, dispose };
}

export function createTable(scene: THREE.Scene): void {
  const surfaceMat = new THREE.MeshStandardMaterial({
    color: 0x1a5c32,
    roughness: 0.75,
  });
  const edgeMat = new THREE.MeshStandardMaterial({
    color: 0x0d3d1f,
    roughness: 0.9,
  });
  const lineMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0x555555,
    emissiveIntensity: 0.4,
  });
  const netMat = new THREE.MeshStandardMaterial({
    color: 0xeeeeee,
    transparent: true,
    opacity: 0.85,
  });
  const postMat = new THREE.MeshStandardMaterial({
    color: 0xaaaaaa,
    metalness: 0.8,
    roughness: 0.2,
  });

  const surface = new THREE.Mesh(
    new THREE.BoxGeometry(8, 0.25, 16),
    surfaceMat,
  );
  surface.position.y = -0.125;
  surface.receiveShadow = true;
  scene.add(surface);

  const edge = new THREE.Mesh(
    new THREE.BoxGeometry(8.35, 0.32, 16.35),
    edgeMat,
  );
  edge.position.y = -0.16;
  scene.add(edge);

  const sideLineGeom = new THREE.BoxGeometry(0.05, 0.015, 16);
  for (const x of [-4, 4]) {
    const m = new THREE.Mesh(sideLineGeom, lineMat);
    m.position.set(x, 0.01, 0);
    scene.add(m);
  }

  const endLineGeom = new THREE.BoxGeometry(8, 0.015, 0.05);
  for (const z of [-8, 8]) {
    const m = new THREE.Mesh(endLineGeom, lineMat);
    m.position.set(0, 0.01, z);
    scene.add(m);
  }

  const centerLine = new THREE.Mesh(
    new THREE.BoxGeometry(8, 0.015, 0.04),
    lineMat,
  );
  centerLine.position.set(0, 0.01, 0);
  scene.add(centerLine);

  const net = new THREE.Mesh(
    new THREE.BoxGeometry(8, 0.5, 0.08),
    netMat,
  );
  net.position.set(0, 0.25, 0);
  scene.add(net);

  const postGeom = new THREE.CylinderGeometry(0.055, 0.055, 0.65, 12);
  for (const x of [-4, 4]) {
    const post = new THREE.Mesh(postGeom, postMat);
    post.position.set(x, 0.325, 0);
    scene.add(post);
  }
}
