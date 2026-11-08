import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

/*
  Procedural stand-in for the Ferrasage product.
  Long axis = X, front = +Z, up = +Y. Returns a THREE.Group centred at origin.
  To use a real model later, replace the call to buildDevice() in
  ProductScene.jsx with a GLTFLoader result.
*/

const COLORS = {
  housing: "#1b1d22",
  lid: "#23262c",
  band: "#1a2440",
  green: "#0f9e28",
  metal: "#cfd3d9",
  label: "#d9f08a",
};

// --- label textures -------------------------------------------------------

function canvasTexture(w, h, draw) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

// Decorative QR-like grid (not a scannable code).
function drawQr(ctx, x, y, size) {
  const n = 25;
  const m = size / n;
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const finder = (fx, fy) => {
    ctx.fillRect(x + fx * m, y + fy * m, 7 * m, 7 * m);
    ctx.clearRect(x + (fx + 1) * m, y + (fy + 1) * m, 5 * m, 5 * m);
    ctx.fillRect(x + (fx + 2) * m, y + (fy + 2) * m, 3 * m, 3 * m);
  };
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      const inFinder = (i < 8 && j < 8) || (i > n - 9 && j < 8) || (i < 8 && j > n - 9);
      if (!inFinder && rnd() > 0.52) ctx.fillRect(x + i * m, y + j * m, m, m);
    }
  finder(0, 0);
  finder(n - 7, 0);
  finder(0, n - 7);
}

function frontLabel() {
  return canvasTexture(1400, 1150, (ctx, w, h) => {
    ctx.fillStyle = COLORS.band;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = COLORS.label;
    const qs = h * 0.5;
    const qx = w / 2 - qs / 2;
    drawQr(ctx, qx, h * 0.06, qs);
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.font = "500 84px Montserrat, sans-serif";
    ctx.fillText("Visit us at", w / 2, h * 0.73);
    ctx.font = "800 104px Montserrat, sans-serif";
    ctx.fillText("ferrasage.com", w / 2, h * 0.88);
    const uw = ctx.measureText("ferrasage.com").width;
    ctx.fillRect(w / 2 - uw / 2, h * 0.9, uw, 5);
  });
}

// Fine moulded-plastic grain, used as a bump map.
function grainTexture() {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 128 + (Math.random() - 0.5) * 90;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(4, 4);
  return tex;
}

function topLabel() {
  const tex = canvasTexture(1400, 2250, (ctx, w, h) => {
    ctx.fillStyle = COLORS.band;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = COLORS.label;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.font = "800 120px Montserrat, sans-serif";
    const tw = ctx.measureText("FERRASAGE").width;
    const x0 = (w - tw) / 2 + 140;
    ctx.fillText("FERRASAGE", x0, h / 2);

    // Brand mark: the real logo asset, drawn once it has loaded.
    const size = 260;
    const img = new Image();
    img.width = img.height = size;
    img.onload = () => {
      ctx.drawImage(img, x0 - size + 10, h / 2 - size / 2, size, size);
      tex.needsUpdate = true;
    };
    img.src = "/logo-dark.svg";
  });
  return tex;
}

// --- parts ----------------------------------------------------------------

function box(w, h, d, r, material) {
  const mesh = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 5, r), material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function shadowed(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function roundedRect(w, d, r) {
  const x = -w / 2;
  const y = -d / 2;
  const s = new THREE.Shape();
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + d - r);
  s.quadraticCurveTo(x + w, y + d, x + w - r, y + d);
  s.lineTo(x + r, y + d);
  s.quadraticCurveTo(x, y + d, x, y + d - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

function polygon(points) {
  const s = new THREE.Shape();
  points.forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y)));
  s.closePath();
  return s;
}

const BEVEL = { bevelEnabled: true, bevelSegments: 4, curveSegments: 32 };

// Housing: chamfered-top profile (Z wide, Y tall) extruded along X.
function housingGeometry(length, depth, height, chamfer) {
  const b = 0.035;
  const d = depth / 2 - b;
  const h = height / 2 - b;
  const c = chamfer;
  const shape = polygon([
    [-d, -h],
    [d, -h],
    [d, h - c],
    [d - c, h],
    [-d + c, h],
    [-d, h - c],
  ]);
  const geo = new THREE.ExtrudeGeometry(shape, {
    ...BEVEL,
    depth: length - 2 * b,
    bevelSize: b,
    bevelThickness: b,
  });
  geo.translate(0, 0, -(length - 2 * b) / 2);
  geo.rotateY(-Math.PI / 2);
  return geo;
}

// Mounting ear: flat plate with a bolt hole + raised U-channel around it.
function mountingEar(material) {
  const g = new THREE.Group();

  const plate = roundedRect(0.95, 0.75, 0.3);
  const hole = new THREE.Path();
  hole.absarc(0, 0.04, 0.17, 0, Math.PI * 2, true);
  plate.holes.push(hole);
  const plateGeo = new THREE.ExtrudeGeometry(plate, {
    ...BEVEL,
    depth: 0.12,
    bevelSize: 0.02,
    bevelThickness: 0.02,
    bevelSegments: 3,
  });
  plateGeo.rotateX(-Math.PI / 2);
  g.add(shadowed(new THREE.Mesh(plateGeo, material)));

  // Buttress against the housing wall (housing is toward -Z in ear space).
  const butt = box(0.5, 0.62, 0.3, 0.1, material);
  butt.position.set(0, 0.12 + 0.28, -0.3);
  g.add(butt);
  return g;
}

// Green tab: chamfered slab, thickness along X.
function greenTab(material) {
  const w = 0.78;
  const h = 0.72;
  const c = 0.16;
  const shape = polygon([
    [-w / 2, -h / 2],
    [w / 2, -h / 2],
    [w / 2, h / 2 - c],
    [w / 2 - c, h / 2],
    [-w / 2 + c, h / 2],
    [-w / 2, h / 2 - c],
  ]);
  const geo = new THREE.ExtrudeGeometry(shape, {
    ...BEVEL,
    depth: 0.14,
    bevelSize: 0.03,
    bevelThickness: 0.03,
    bevelSegments: 4,
  });
  geo.translate(0, 0, -0.07);
  geo.rotateY(-Math.PI / 2);
  return shadowed(new THREE.Mesh(geo, material));
}

// Ring terminal (washer-style lug): ring + short bent stem toward +X.
function ringTerminal(material) {
  const g = new THREE.Group();
  const ringShape = new THREE.Shape();
  ringShape.absarc(0, 0, 0.23, 0, Math.PI * 2, false);
  const h = new THREE.Path();
  h.absarc(0, 0, 0.115, 0, Math.PI * 2, true);
  ringShape.holes.push(h);
  const ringGeo = new THREE.ExtrudeGeometry(ringShape, {
    ...BEVEL,
    depth: 0.035,
    bevelSize: 0.015,
    bevelThickness: 0.015,
    bevelSegments: 3,
    curveSegments: 48,
  });
  ringGeo.rotateX(-Math.PI / 2);
  g.add(shadowed(new THREE.Mesh(ringGeo, material)));
  const stem = shadowed(new THREE.Mesh(new RoundedBoxGeometry(0.32, 0.05, 0.14, 3, 0.02), material));
  stem.position.set(0.3, 0.02, 0);
  g.add(stem);
  return g;
}

export function buildDevice() {
  const device = new THREE.Group();

  const grain = grainTexture();
  const housing = new THREE.MeshPhysicalMaterial({
    color: COLORS.housing,
    roughness: 0.52,
    bumpMap: grain,
    bumpScale: 0.6,
    clearcoat: 0.15,
    clearcoatRoughness: 0.6,
  });
  const lid = new THREE.MeshPhysicalMaterial({
    color: COLORS.lid,
    roughness: 0.4,
    bumpMap: grain,
    bumpScale: 0.35,
    clearcoat: 0.3,
    clearcoatRoughness: 0.45,
  });
  const green = new THREE.MeshPhysicalMaterial({
    color: COLORS.green,
    roughness: 0.45,
    clearcoat: 0.3,
    clearcoatRoughness: 0.35,
    envMapIntensity: 0.6,
  });
  const metal = new THREE.MeshStandardMaterial({
    color: COLORS.metal,
    metalness: 1,
    roughness: 0.22,
  });
  const bandMat = new THREE.MeshPhysicalMaterial({
    color: COLORS.band,
    roughness: 0.4,
    clearcoat: 0.5,
    clearcoatRoughness: 0.3,
  });

  const H = 1.15; // housing height
  const D = 2.5; // housing depth (Z)
  const HW = 1.05; // housing length (X)
  const BL = 1.5; // band length (X)
  const BD = 2.35; // band depth (Z)
  const BH = 1.25; // band height
  const lx = -(BL / 2 + HW / 2 - 0.08);

  // End housings
  // One end assembly (housing, lids, tabs, rings, ears) built for the left
  // end, then mirrored for the right so both sides are identical.
  const buildEnd = () => {
    const end = new THREE.Group();

    const body = shadowed(
      new THREE.Mesh(housingGeometry(HW, D, H, 0.2), housing),
    );
    body.position.x = lx;
    end.add(body);

    // Three raised lid plates
    [-0.82, 0, 0.82].forEach((z) => {
      const p = box(HW - 0.3, 0.07, 0.74, 0.03, lid);
      p.position.set(lx - 0.02, H / 2 + 0.005, z);
      end.add(p);
    });

    // Green tabs + ring terminals on the outer face
    const faceX = lx - HW / 2;
    [-0.62, 0.62].forEach((z) => {
      const tab = greenTab(green);
      tab.position.set(faceX - 0.04, 0.02, z);
      end.add(tab);

      const ring = ringTerminal(metal);
      ring.position.set(faceX - 0.58, -0.2, z + (z > 0 ? 0.08 : -0.08));
      ring.rotation.z = 0.12;
      end.add(ring);
    });

    // Mounting ears at the outer corners
    [1, -1].forEach((zs) => {
      const e = mountingEar(housing);
      e.position.set(lx - 0.2, -H / 2, zs * (D / 2 + 0.2));
      e.rotation.y = zs < 0 ? Math.PI : 0;
      end.add(e);
    });
    return end;
  };

  const leftEnd = buildEnd();
  const rightEnd = buildEnd();
  rightEnd.scale.x = -1;
  device.add(leftEnd, rightEnd);

  // Central label band
  const band = box(BL, BH, BD, 0.07, bandMat);
  device.add(band);
  const front = new THREE.Mesh(
    new THREE.PlaneGeometry(BL - 0.1, BH - 0.1),
    new THREE.MeshPhysicalMaterial({ map: frontLabel(), roughness: 0.4, clearcoat: 0.4 }),
  );
  front.position.z = BD / 2 + 0.002;
  const back = front.clone();
  back.rotation.y = Math.PI;
  back.position.z = -(BD / 2 + 0.002);
  const top = new THREE.Mesh(
    new THREE.PlaneGeometry(BL - 0.1, BD - 0.1),
    new THREE.MeshPhysicalMaterial({ map: topLabel(), roughness: 0.4, clearcoat: 0.4 }),
  );
  top.rotation.x = -Math.PI / 2;
  top.position.y = BH / 2 + 0.002;
  device.add(front, back, top);

  return device;
}
