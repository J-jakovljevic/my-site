import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { profile } from "@data/profileData";
import { PROJECTS } from "@utils/routes";

// Lazy-loaded so the three.js/@react-three/fiber bundle isn't part of the
// initial page load. It's a decorative visual, not critical content.
const HeroVisual = lazy(() => import("@components/HeroVisual"));

const Hero = () => {
  return (
    <section className="relative flex min-h-[60vh] items-center pt-16 pb-0 sm:pt-24 sm:pb-8 md:pt-45 md:pb-10">
      <div className="relative grid w-full grid-cols-1 items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-4 lg:grid-cols-[520px_minmax(0,1fr)]">
        {/* Named variants ("hidden"/"show") propagate down to children that
        declare the same variant keys, so each motion.p/h1 below only needs
        its own hidden/show values - the stagger timing lives here once. */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09 } },
          }}
          className="flex flex-col items-center gap-8 text-center md:ml-2 md:items-start md:text-left"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-sm font-medium tracking-wide text-muted uppercase"
          >
            {profile.title}
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0 },
            }}
            className="max-w-[485px] font-serif text-5xl leading-[1.1] font-medium tracking-tight text-ink sm:text-6xl"
          >
            {profile.heroHeadline}
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-lg text-muted"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            className="flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to={PROJECTS}
                className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-medium text-canvas transition-shadow hover:shadow-lg"
              >
                Explore my projects
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center justify-center rounded-full border border-edge px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto pt-4 md:pt-0 aspect-square w-full max-w-sm md:mx-0 md:max-w-none lg:-mt-6 lg:-ml-10"
        >
          <Suspense fallback={null}>
            <HeroVisual />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
