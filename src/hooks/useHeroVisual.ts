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

  // Lower particle count and cap device pixel ratio at 1 on mobile - phone
  // GPUs struggle with the full desktop density at high DPR.
  const count = isMobile ? 700 : 3000;
  const dpr: [number, number] = isMobile ? [1, 1] : [1, 2];

  return { reducedMotion, isMobile, webglSupported, count, dpr };
};
