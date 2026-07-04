import { motion, useReducedMotion } from "framer-motion";

import meImg from "@assets/me.jpeg";
import Reveal from "@components/Reveal";
import { profile } from "@data/profileData";

const ContactHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
      <Reveal>
        <div className="relative shrink-0">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-3 -left-2 h-36 w-35 sm:-top-4 sm:-left-2.5 sm:h-46 sm:w-45"
            style={{
              backgroundImage:
                "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 35%, transparent) 1px, transparent 0.5px)",
              backgroundSize: "12px 12px",
            }}
          />

          <motion.img
            src={meImg}
            alt={profile.name}
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="h-32 w-32 min-w-32 rounded-full object-cover ring-1 sm:h-40 sm:w-40 sm:min-w-40"
            style={{
              boxShadow:
                "0 0 0 1px color-mix(in srgb, var(--color-accent) 20%, transparent)",
            }}
          />
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="flex flex-col gap-6">
          <h1 className="font-cormorant text-5xl font-semibold text-ink sm:text-6xl">
            Get in touch
          </h1>

          <div className="bg-accent h-px w-14" />

          <p className="max-w-2xl text-lg text-muted">
            Whether you&rsquo;re starting from scratch or improving an existing
            product, I&rsquo;d love to help turn your ideas into production-ready
            software.
          </p>
        </div>
      </Reveal>
    </div>
  );
};

export default ContactHero;
