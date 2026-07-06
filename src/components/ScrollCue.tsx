import { motion, useScroll, useTransform } from "framer-motion";

const ScrollCue = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 80], [1, 0]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ opacity }}
      className="pointer-events-none fixed bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-muted"
    >
      <span className="text-[10px] font-medium tracking-[0.2em] uppercase">
        Scroll
      </span>

      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M6 9l6 6 6-6" />
      </motion.svg>
    </motion.div>
  );
};

export default ScrollCue;
