import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import {
  generateAbstractForm,
  generateGrid,
  generateNetwork,
} from "@utils/particleShapes";
import { PALETTE, SEGMENT_DURATIONS } from "@models/particleField";

const TOTAL_DURATION = SEGMENT_DURATIONS.reduce((sum, d) => sum + d, 0);

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
  const autoRotation = useRef(0);

  const shapes = useMemo(
    () => [
      generateGrid(count),
      generateNetwork(count),
      generateAbstractForm(count),
    ],
    [count],
  );

  // Segments can have different durations, so we can't just divide elapsed
  // time evenly. Walk the cumulative durations to find which stage we're
  // in and how far through it we are.
  const segmentAt = (elapsed: number) => {
    let t = elapsed % TOTAL_DURATION;

    for (let seg = 0; seg < SEGMENT_DURATIONS.length; seg++) {
      if (t < SEGMENT_DURATIONS[seg]) {
        return { seg, rawT: t / SEGMENT_DURATIONS[seg] };
      }
      t -= SEGMENT_DURATIONS[seg];
    }

    return { seg: SEGMENT_DURATIONS.length - 1, rawT: 0 };
  };

  // Smoother variant of smoothstep (zero 1st AND 2nd derivative at the
  // edges), so the morph between shapes eases in/out without a visible
  // "kick" at the start/end of each stage.
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

  useFrame((state, delta) => {
    const geo = pointsRef.current?.geometry;
    const posAttr = geo?.attributes.position as
      | THREE.BufferAttribute
      | undefined;
    const t = state.clock.elapsedTime;

    if (posAttr) {
      const arr = posAttr.array as Float32Array;

      if (reducedMotion) {
        // Freeze on the grid stage instead of the midpoint of a morph -
        // it's the most legible, "settled" shape for users who opted out
        // of motion.
        const shape = shapes[1];
        arr.set(shape);
      } else {
        const { seg, rawT } = segmentAt(t);
        const localT = smootherstep(rawT);
        const a = shapes[seg];
        const b = shapes[(seg + 1) % shapes.length];

        for (let i = 0; i < count; i++) {
          const i3 = i * 3;

          // Per-particle phase offset so the "breathing" jitter isn't
          // perfectly in sync across all particles - reads as organic
          // rather than a single pulsing blob.
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
      // autoRotation is accumulated in a ref (not state) so it survives
      // across frames without triggering re-renders every tick.
      if (!reducedMotion) autoRotation.current += delta * 0.045;

      // `interactive` is false on mobile (no meaningful hover/pointer), so
      // the tilt-toward-cursor effect is skipped there rather than reacting
      // to touch position.
      const mouseX = interactive && !reducedMotion ? state.pointer.x * 0.18 : 0;
      const mouseY = interactive && !reducedMotion ? state.pointer.y * 0.1 : 0;

      // Lerp toward the target rotation instead of setting it directly, so
      // mouse movement and auto-rotation both feel smoothed rather
      // than snapping frame to frame.
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
  });

  return {
    groupRef,
    pointsRef,
    positions,
    colors,
    sizes,
  };
};
