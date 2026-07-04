import { THEME_COLORS } from "@utils/theme";

export const PALETTE = [
  THEME_COLORS.particleBronze,
  THEME_COLORS.particleSand,
  THEME_COLORS.particleUmber,
  THEME_COLORS.edge,
];

// Seconds spent morphing into each stage: grid -> network -> abstract
export const SEGMENT_DURATIONS = [5, 8, 8];

// Scales point size by inverse distance from the camera (perspective-correct
// sizing), since plain gl_PointSize doesn't do this on its own.
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

// Draws each point as a soft circular sprite: discards anything outside the
// point's circle, then fades opacity toward the edge instead of a hard cutoff.
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
