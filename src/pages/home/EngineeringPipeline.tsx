import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Reveal from "@components/Reveal";
import { buildPipeline } from "@data/homeData";

const EASE = [0.22, 1, 0.36, 1] as const;

const EngineeringPipeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stage = buildPipeline[activeIndex];

  return (
    <section className="flex flex-col gap-14">
      <Reveal>
        <p className="text-[12px] font-semibold tracking-[0.25em] text-muted uppercase">
          My Engineering Workflow
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[7fr_13fr] md:gap-14">
          <nav className="divide-y divide-edge-soft self-start">
            {buildPipeline.map((s, i) => {
              const isActive = i === activeIndex;

              return (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`group flex w-full cursor-pointer items-center gap-4 border-l-2 py-5 pr-4 pl-6 text-left transition-colors duration-300 ${
                    isActive
                      ? "border-l-bronze bg-bronze/5"
                      : "border-l-transparent"
                  }`}
                >
                  <span
                    className={`font-serif text-lg transition-colors duration-300 ${
                      isActive
                        ? "text-bronze"
                        : "text-edge group-hover:text-bronze"
                    }`}
                  >
                    0{i + 1}
                  </span>

                  <span
                    className={`font-playfair text-[20px] transition-[color,transform] duration-300 ease-out group-hover:translate-x-2 sm:text-[22px] ${
                      isActive
                        ? "font-bold text-ink"
                        : "font-semibold text-muted group-hover:text-ink"
                    }`}
                  >
                    {s.title}
                  </span>

                  <span
                    className="ml-auto -translate-x-2 text-bronze opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-edge-soft bg-surface p-10 shadow-subtle sm:p-12">
            <span
              aria-hidden="true"
              style={{ top: -6, right: -4 }}
              className="font-serif pointer-events-none absolute z-0 text-[144px] leading-[0.8] font-light text-bronze-muted opacity-[0.15] select-none sm:text-[170px]"
            >
              0{activeIndex + 1}
            </span>

            {/* mode="wait" makes the outgoing stage fully exit before the
            new one enters, instead of cross-fading, otherwise switching
            tabs quickly would overlap two stages' content. */}
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="relative z-10 flex flex-col gap-7"
              >
                <h3 className="font-playfair text-[34px] leading-tight font-bold text-ink">
                  {stage.title}
                </h3>

                <div className="h-px w-12 bg-bronze" />

                <p className="max-w-2xl text-base leading-[1.8] text-ink/80">
                  {stage.description}
                </p>

                <div className="flex flex-col gap-3">
                  <p className="text-[11px] font-semibold tracking-[0.25em] text-muted uppercase">
                    Responsibilities
                  </p>

                  <ul className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                    {stage.responsibilities.map((r) => (
                      <li
                        key={r}
                        className="flex items-start gap-6 text-base text-ink/75"
                      >
                        <span className="w-4 shrink-0 text-bronze">→</span>
                        <span className="leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-[11px] font-semibold tracking-[0.25em] text-muted uppercase">
                    Core technologies
                  </p>

                  <p className="text-[15px] leading-loose font-medium text-ink/80">
                    {stage.technologies.join(" · ")}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default EngineeringPipeline;
