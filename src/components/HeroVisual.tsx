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
        camera={{ position: [0, 0, 5.4], fov: 42 }}
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
