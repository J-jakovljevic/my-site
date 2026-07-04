import { motion } from "framer-motion";
import type { ReactNode } from "react";

const Reveal = ({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      // once: true so it doesn't replay on every scroll back into view;
      // margin: "-80px" shrinks the trigger area so content reveals a bit
      // before it's fully on screen, not right at the viewport edge.
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
