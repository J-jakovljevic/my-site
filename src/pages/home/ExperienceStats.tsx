import AnimatedNumber from "@components/AnimatedNumber";
import Reveal from "@components/Reveal";
import { Link } from "react-router-dom";
import { EXPERIENCE } from "@utils/routes";
import { highlights } from "@data/homeData";

const ExperienceStats = () => {
  return (
    <section className="flex flex-col gap-8">
      <Reveal>
        <p className="text-xs font-semibold tracking-widest text-muted uppercase">
          Experience in numbers
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 divide-y  divide-edge sm:grid-cols-3 sm:gap-0 sm:divide-y-0 sm:divide-x">
        {highlights.map((h, i) => (
          <Reveal key={h.label} delay={i * 0.3}>
            <div className="flex flex-col items-center gap-2 py-6 text-center sm:py-0">
              <span className="block font-serif text-5xl font-medium text-accent">
                <AnimatedNumber value={h.value} />
              </span>

              <span className="block text-sm text-muted">{h.label}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          to={EXPERIENCE}
          className="inline-flex items-center gap-3 rounded-full border border-ink bg-ink/5 px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink/10"
        >
          View full experience
          <span className="text-accent">→</span>
        </Link>
      </div>
    </section>
  );
};

export default ExperienceStats;
