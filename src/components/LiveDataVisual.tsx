import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const points: [number, number][] = [
  [20, 230],
  [70, 190],
  [120, 210],
  [170, 130],
  [220, 170],
  [270, 90],
  [320, 120],
];

const linePath = `M${points.map((p) => p.join(",")).join(" L")}`;

const LiveDataVisual = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  return (
    <svg viewBox="0 0 360 300" className="h-full w-full" aria-hidden="true">
      {[60, 120, 180, 240].map((y) => (
        <line
          key={y}
          x1="20"
          y1={y}
          x2="340"
          y2={y}
          className="stroke-edge"
          strokeWidth="1"
        />
      ))}

      <path
        d={linePath}
        className="fill-none stroke-ink/15"
        strokeWidth="1.5"
      />

      <motion.path
        d={linePath}
        className="fill-none stroke-accent"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          prefersReducedMotion
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: [0, 1], opacity: 1 }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
        }
      />

      {!prefersReducedMotion && (
        <motion.circle
          r="4"
          className="fill-accent"
          animate={{
            cx: points.map((p) => p[0]),
            cy: points.map((p) => p[1]),
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      )}

      {points.map(([x, y]) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="2.5"
          className="fill-ink/15"
        />
      ))}
    </svg>
  );
};

export default LiveDataVisual;
