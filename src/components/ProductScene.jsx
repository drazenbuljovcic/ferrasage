import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { buildDevice } from "../three/buildDevice";

// Overall model size (1 = original). 1.4 = 40% larger.
const MODEL_SCALE = 1.4;

// Default view: above the front-left corner, looking down so the band runs
// diagonally with the logo reading top-down (~55° elevation, ~24° to the left
// of straight-on, ~8 units away).
const CAMERA_POSITION = [-1.87, 6.55, 4.19];

export default function ProductScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.touchAction = "pan-y"; // keep page scrollable on touch

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(...CAMERA_POSITION);

    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(5, 8, 6);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -6;
    key.shadow.camera.right = 6;
    key.shadow.camera.top = 6;
    key.shadow.camera.bottom = -6;
    key.shadow.radius = 6;
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x98a869, 1.2);
    rim.position.set(-6, 3, -5);
    scene.add(rim);

    const device = buildDevice();
    device.scale.setScalar(MODEL_SCALE);
    scene.add(device);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 30),
      new THREE.ShadowMaterial({ opacity: 0.35 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.58 * MODEL_SCALE;
    floor.receiveShadow = true;
    scene.add(floor);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 6;
    controls.maxDistance = 16;
    controls.maxPolarAngle = Math.PI / 2 - 0.05;

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      renderer.setSize(w, h, false); // CSS keeps the canvas at 100% of its box
      camera.aspect = w / h;
      // Zoom out on narrow viewers so the whole model stays in frame.
      camera.zoom = Math.min(1, camera.aspect / 1.45);
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    let frame = 0;
    let visible = true;
    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (!visible) return;
      controls.update();
      renderer.render(scene, camera);
    };
    tick();
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(mount);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      controls.dispose();
      scene.traverse((o) => {
        o.geometry?.dispose();
        const m = o.material;
        if (m) (Array.isArray(m) ? m : [m]).forEach((x) => {
          x.map?.dispose();
          x.dispose();
        });
      });
      scene.environment?.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      data-id="product-canvas"
      className="h-full w-full cursor-grab active:cursor-grabbing"
    />
  );
}
