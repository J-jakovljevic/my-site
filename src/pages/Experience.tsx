import Reveal from "@components/Reveal";
import { experience } from "@data/experienceData";

const Experience = () => {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-14">
      <Reveal>
        <h1 className="font-serif text-4xl font-medium">Experience</h1>
      </Reveal>

      <div className="relative">
        <div className="absolute top-2 bottom-2 left-2 w-px bg-edge/50 sm:left-2.5" />

        <div className="flex flex-col divide-y divide-edge">
          {experience.map((job, i) => (
            <Reveal
              key={`${job.company}-${job.year}`}
              delay={i * 0.1}
              className={i === 0 ? "pb-10" : "py-10"}
            >
              <div className="relative flex gap-6 sm:gap-8">
                <div className="flex w-4 shrink-0 justify-center pt-1.5 sm:w-5">
                  <span
                    className={`h-3.5 w-3.5 rounded-full ring-4 ring-canvas ${
                      job.outlineDot
                        ? "border-2 border-accent bg-canvas"
                        : "bg-accent"
                    }`}
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-serif text-3xl font-medium text-ink">
                      {job.year}
                    </span>

                    <span className="font-serif text-2xl font-medium">
                      -{" "}
                      {job.link ? (
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-baseline gap-1 text-ink underline decoration-edge underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                        >
                          {job.company}
                          <span aria-hidden="true" className="text-base">
                            ↗
                          </span>
                        </a>
                      ) : (
                        job.company
                      )}
                    </span>
                  </div>

                  {[job.role, job.location, job.period].filter(Boolean).length >
                    0 && (
                    <p className="text-base text-muted">
                      {[job.role, job.location, job.period]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  )}

                  {job.focus && (
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-medium tracking-widest text-muted uppercase">
                        Focus
                      </span>
                      <p className="text-base font-medium text-accent">
                        {job.focus}
                      </p>
                    </div>
                  )}

                  {job.context && (
                    <p className="max-w-2xl text-lg text-ink">{job.context}</p>
                  )}

                  {job.highlights.length > 0 && (
                    <ul className="flex flex-col gap-2">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-lg">
                          <span className="w-4 shrink-0 text-accent">→</span>
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {job.technologies.length > 0 && (
                    <ul className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-edge bg-surface px-3 py-1 text-sm text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
