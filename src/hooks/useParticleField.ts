import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import {
  ICOSA_EDGES,
  generateAbstractForm,
  generateGrid,
  generateNetwork,
  generateScattered,
  normalizedIcosaVertices,
} from "@utils/particleShapes";
import { PALETTE, SEGMENT_DURATION } from "@models/particleField";

type UseParticleFieldParams = {
  count: number;
  reducedMotion: boolean;
  interactive: boolean;
};

export const useParticleField = ({
  count,
  reducedMotion,
  interactive,
}: UseParticleFieldParams) => {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const lineMaterialRef = useRef<THREE.LineBasicMaterial>(null);
  const autoRotation = useRef(0);

  const shapes = useMemo(
    () => [
      generateScattered(count),
      generateGrid(count),
      generateNetwork(count),
      generateAbstractForm(count),
    ],
    [count],
  );

  const smootherstep = (t: number) => {
    return t * t * t * (t * (t * 6 - 15) + 10);
  };

  const positions = useMemo(() => shapes[0].slice(), [shapes]);

  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const c = new THREE.Color();

    for (let i = 0; i < count; i++) {
      c.set(PALETTE[Math.floor(Math.random() * PALETTE.length)]);
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    return arr;
  }, [count]);

  const sizes = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) arr[i] = 1.1 + Math.random() * 2.1;
    return arr;
  }, [count]);

  const phases = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) arr[i] = Math.random() * Math.PI * 2;
    return arr;
  }, [count]);

  const edgeGeometry = useMemo(() => {
    const verts = normalizedIcosaVertices(2.0);
    const arr = new Float32Array(ICOSA_EDGES.length * 2 * 3);

    ICOSA_EDGES.forEach(([ai, bi], i) => {
      arr.set(verts[ai], i * 6);
      arr.set(verts[bi], i * 6 + 3);
    });

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));

    return geo;
  }, []);

  useFrame((state, delta) => {
    const geo = pointsRef.current?.geometry;
    const posAttr = geo?.attributes.position as
      | THREE.BufferAttribute
      | undefined;
    const t = state.clock.elapsedTime;

    let cycle = 0;
    if (posAttr) {
      const arr = posAttr.array as Float32Array;

      if (reducedMotion) {
        const shape = shapes[1];
        arr.set(shape);
      } else {
        cycle = (t / SEGMENT_DURATION) % shapes.length;
        const seg = Math.floor(cycle);
        const localT = smootherstep(cycle - seg);
        const a = shapes[seg];
        const b = shapes[(seg + 1) % shapes.length];

        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          const breathe = 1 + Math.sin(t * 0.6 + phases[i]) * 0.012;
          arr[i3] = THREE.MathUtils.lerp(a[i3], b[i3], localT) * breathe;
          arr[i3 + 1] =
            THREE.MathUtils.lerp(a[i3 + 1], b[i3 + 1], localT) * breathe;
          arr[i3 + 2] =
            THREE.MathUtils.lerp(a[i3 + 2], b[i3 + 2], localT) * breathe;
        }
      }
      posAttr.needsUpdate = true;
    }

    if (groupRef.current) {
      if (!reducedMotion) autoRotation.current += delta * 0.045;
      const mouseX = interactive && !reducedMotion ? state.pointer.x * 0.18 : 0;
      const mouseY = interactive && !reducedMotion ? state.pointer.y * 0.1 : 0;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        autoRotation.current + mouseX,
        0.04,
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouseY,
        0.04,
      );

      const breatheScale = reducedMotion ? 1 : 1 + Math.sin(t * 0.5) * 0.025;
      groupRef.current.scale.setScalar(breatheScale);
    }

    if (lineMaterialRef.current) {
      const distToNetwork = Math.min(
        Math.abs(cycle - 2),
        shapes.length - Math.abs(cycle - 2),
      );
      lineMaterialRef.current.opacity = reducedMotion
        ? 0
        : Math.max(0, 1 - distToNetwork) * 0.22;
    }
  });

  return {
    groupRef,
    pointsRef,
    lineMaterialRef,
    positions,
    colors,
    sizes,
    edgeGeometry,
  };
};
