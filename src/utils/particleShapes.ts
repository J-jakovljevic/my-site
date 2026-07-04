// Four "stages" a particle field can morph through, each returning a flat
// Float32Array of [x, y, z, x, y, z, ...] of identical length so positions
// can be linearly interpolated between any two stages.

const PHI = (1 + Math.sqrt(5)) / 2;

export const ICOSA_VERTICES: [number, number, number][] = [
  [-1, PHI, 0],
  [1, PHI, 0],
  [-1, -PHI, 0],
  [1, -PHI, 0],
  [0, -1, PHI],
  [0, 1, PHI],
  [0, -1, -PHI],
  [0, 1, -PHI],
  [PHI, 0, -1],
  [PHI, 0, 1],
  [-PHI, 0, -1],
  [-PHI, 0, 1],
];

export const ICOSA_EDGES: [number, number][] = [
  [0, 1],
  [0, 5],
  [0, 7],
  [0, 10],
  [0, 11],
  [1, 5],
  [1, 7],
  [1, 8],
  [1, 9],
  [2, 3],
  [2, 4],
  [2, 6],
  [2, 10],
  [2, 11],
  [3, 4],
  [3, 6],
  [3, 8],
  [3, 9],
  [4, 5],
  [4, 9],
  [4, 11],
  [5, 9],
  [5, 11],
  [6, 7],
  [6, 8],
  [6, 10],
  [7, 8],
  [7, 10],
  [8, 9],
  [10, 11],
];

export const normalizedIcosaVertices = (
  radius: number,
): [number, number, number][] => {
  return ICOSA_VERTICES.map(([x, y, z]) => {
    const len = Math.sqrt(x * x + y * y + z * z);

    return [(x / len) * radius, (y / len) * radius, (z / len) * radius];
  });
};

/** Stage 1 - chaos: uniformly scattered points inside a sphere. */
export const generateScattered = (
  count: number,
  radius = 2.3,
): Float32Array => {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return positions;
};

/** Stage 2 - architecture: a structured, evenly spaced 3D lattice. */
export const generateGrid = (count: number, size = 1.9): Float32Array => {
  const positions = new Float32Array(count * 3);
  const dim = Math.max(2, Math.ceil(Math.cbrt(count)));
  const step = (size * 2) / (dim - 1);
  let idx = 0;

  for (let x = 0; x < dim && idx < count; x++) {
    for (let y = 0; y < dim && idx < count; y++) {
      for (let z = 0; z < dim && idx < count; z++) {
        positions[idx * 3] = -size + x * step;
        positions[idx * 3 + 1] = -size + y * step;
        positions[idx * 3 + 2] = -size + z * step;
        idx++;
      }
    }
  }

  while (idx < count) {
    const ref = Math.floor(Math.random() * idx) * 3;

    positions[idx * 3] = positions[ref] + (Math.random() - 0.5) * 0.04;
    positions[idx * 3 + 1] = positions[ref + 1] + (Math.random() - 0.5) * 0.04;
    positions[idx * 3 + 2] = positions[ref + 2] + (Math.random() - 0.5) * 0.04;
    idx++;
  }

  return positions;
};

/** Stage 3 - implementation: particles distributed along the edges of an
 * icosahedron, reading as a connected node/edge network. */
export const generateNetwork = (count: number, radius = 2.0): Float32Array => {
  const positions = new Float32Array(count * 3);
  const verts = normalizedIcosaVertices(radius);
  const edgeCount = ICOSA_EDGES.length;
  const perEdge = Math.floor(count / edgeCount);
  let idx = 0;

  for (let e = 0; e < edgeCount; e++) {
    const [ai, bi] = ICOSA_EDGES[e];
    const a = verts[ai];
    const b = verts[bi];
    const n = e === edgeCount - 1 ? count - idx : perEdge;

    for (let k = 0; k < n; k++) {
      const t = n === 1 ? 0.5 : k / (n - 1);
      const jitter = 0.025;

      positions[idx * 3] =
        a[0] + (b[0] - a[0]) * t + (Math.random() - 0.5) * jitter;
      positions[idx * 3 + 1] =
        a[1] + (b[1] - a[1]) * t + (Math.random() - 0.5) * jitter;
      positions[idx * 3 + 2] =
        a[2] + (b[2] - a[2]) * t + (Math.random() - 0.5) * jitter;
      idx++;
    }
  }

  return positions;
};

/** Stage 4 - production: particles tracing a (2,3) torus knot, an elegant
 * abstract three-dimensional form. */
export const generateAbstractForm = (
  count: number,
  scale = 1.7,
): Float32Array => {
  const positions = new Float32Array(count * 3);
  const p = 2;
  const q = 3;
  const r = 0.9;
  const tubeR = 0.34;

  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2;
    const cx = (r + tubeR * Math.cos(q * t)) * Math.cos(p * t);
    const cy = (r + tubeR * Math.cos(q * t)) * Math.sin(p * t);
    const cz = tubeR * Math.sin(q * t);
    const jitter = 0.05;

    positions[i * 3] = cx * scale + (Math.random() - 0.5) * jitter;
    positions[i * 3 + 1] = cy * scale + (Math.random() - 0.5) * jitter;
    positions[i * 3 + 2] = cz * scale + (Math.random() - 0.5) * jitter;
  }

  return positions;
};
