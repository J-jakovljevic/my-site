import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import ParticleField from "@components/hero/ParticleField";
import CanvasErrorBoundary from "@components/CanvasErrorBoundary";
import { useHeroVisual } from "@hooks/useHeroVisual";

const HeroVisual = () => {
  const { reducedMotion, isMobile, webglSupported, count, dpr } =
    useHeroVisual();

  if (!webglSupported) return null;

  return (
    <CanvasErrorBoundary>
      <Canvas
        dpr={dpr}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        // z: 6.6 gives enough vertical margin at fov 42 so the widest shape
        // (radius ~2.0-2.2) isn't clipped by the viewport edges once the
        // breathing scale and rotation are applied - don't shrink this
        // without re-checking the largest shape still fits.
        camera={{ position: [0, 0, 6.6], fov: 42 }}
        aria-hidden="true"
      >
        <Suspense fallback={null}>
          <ParticleField
            count={count}
            reducedMotion={reducedMotion}
            interactive={!isMobile}
          />
        </Suspense>
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default HeroVisual;
