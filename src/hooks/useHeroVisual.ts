import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

// Some browsers/drivers throw instead of returning null when WebGL is
// blocked (e.g. GPU blocklisted), so this has to be a try/catch, not just a
// falsy check on getContext's return value.
const isWebGLAvailable = () => {
  if (typeof window === "undefined" || !("WebGLRenderingContext" in window))
    return false;
  try {
    const canvas = document.createElement("canvas");

    return !!(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
};

export const useHeroVisual = () => {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [webglSupported] = useState(isWebGLAvailable);

  // Lower particle count on mobile - phone GPUs struggle with the full
  // desktop density. dpr is left at [1, 2] on both so phones with a retina
  // screen (the vast majority) don't render the canvas at half resolution.
  const count = isMobile ? 2000 : 3000;
  const dpr: [number, number] = [1, 2];

  return { reducedMotion, isMobile, webglSupported, count, dpr };
};
