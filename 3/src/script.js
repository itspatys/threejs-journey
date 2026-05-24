import * as THREE from "three";

const sizes = {
  width: 800,
  height: 600,
};

const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.setZ(3);

const renderer = new THREE.WebGLRenderer({ canvas });

scene.add(mesh);
scene.add(camera);

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
