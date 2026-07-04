import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Reveal from "@components/Reveal";
import { closingStatement } from "@data/homeData";

const ClosingStatement = () => {
  return (
    <section className="flex flex-col items-center gap-8 text-center">
      <Reveal>
        <p className="mx-auto max-w-xl font-serif text-3xl leading-snug font-medium text-ink sm:text-4xl">
          {closingStatement.message}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-canvas transition-shadow hover:shadow-lg"
          >
            {closingStatement.ctaLabel} →
          </Link>
        </motion.div>
      </Reveal>
    </section>
  );
};

export default ClosingStatement;
