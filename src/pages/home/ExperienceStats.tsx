import AnimatedNumber from "@components/AnimatedNumber";
import Reveal from "@components/Reveal";
import { highlights } from "@data/homeData";

const ExperienceStats = () => {
  return (
    <section className="flex flex-col gap-8">
      <Reveal>
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
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
    </section>
  );
};

export default ExperienceStats;
