import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedNumber = ({ value }: { value: string }) => {
  const [display, setDisplay] = useState(0);

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // value is a display string like "4+" or "10+" - split off the leading
  // number so it can be counted up, keeping the rest ("+") as a static
  // suffix. Falls back to rendering the whole string if there's no leading
  // number to animate.
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    if (!inView || target === null) return;

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref}>{target === null ? suffix : `${display}${suffix}`}</span>
  );
};

export default AnimatedNumber;
