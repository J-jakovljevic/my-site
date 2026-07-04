import { THEME_COLORS } from "@utils/theme";

// Warm bronze / beige only - no bright, neon or accent-orange tones
export const PALETTE = [
  THEME_COLORS.particleBronze,
  THEME_COLORS.particleSand,
  THEME_COLORS.particleUmber,
  THEME_COLORS.edge,
];
export const SEGMENT_DURATION = 9; // seconds per morph between stages

export const VERTEX_SHADER = /* glsl */ `
  attribute vec3 color;
  attribute float aSize;
  varying vec3 vColor;
  void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * (13.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const FRAGMENT_SHADER = /* glsl */ `
  varying vec3 vColor;
  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float dist = length(uv);
    if (dist > 0.5) discard;
    float alpha = smoothstep(0.5, 0.05, dist) * 0.5;
    gl_FragColor = vec4(vColor, alpha);
  }
`;
