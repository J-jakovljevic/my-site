import { motion } from "framer-motion";
import { useState } from "react";

import Reveal from "@components/Reveal";
import { projects } from "@data/projectsData";

const domains = ["All", ...Array.from(new Set(projects.map((p) => p.domain)))];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.domain === filter);

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-14">
      <Reveal>
        <h1 className="font-serif text-4xl font-medium">Projects</h1>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="max-w-3xl text-lg text-muted">
          Most of my work has been for clients under NDA, so I can&rsquo;t share
          product names or live links for those. But here&rsquo;s a closer look
          at what I actually built and owned! Where I could, I&rsquo;ve added a
          live link or a GitHub repo.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="flex flex-wrap gap-2">
          {domains.map((domain) => (
            <button
              key={domain}
              type="button"
              onClick={() => setFilter(domain)}
              className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-medium tracking-widest uppercase transition-colors ${
                filter === domain
                  ? "border-ink text-ink"
                  : "border-edge text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="flex flex-col gap-5">
        {filtered.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            whileHover={{ y: -2 }}
            className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-edge bg-surface p-8 shadow-soft transition-shadow duration-300 hover:shadow-accent sm:flex-row sm:items-start sm:justify-between sm:gap-10 sm:p-10"
          >
            <div className="relative flex-1">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="inline-flex w-fit items-center rounded-full border border-edge bg-canvas px-3 py-1 text-xs font-medium tracking-widest text-ink uppercase">
                  {project.domain}
                </span>

                <span className="text-sm whitespace-nowrap text-muted">
                  {project.period}
                </span>
              </div>

              <h2 className="mb-1 font-serif text-2xl font-medium">
                {project.title}
              </h2>

              <p className="mb-3 text-base text-muted">{project.company}</p>

              <p className="max-w-2xl text-lg text-muted">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-fit items-center gap-1 text-base font-medium"
                >
                  {project.linkLabel ?? "Visit site"} ↗
                </a>
              )}
            </div>

            <div className="relative sm:w-56 sm:shrink-0">
              <span className="text-xs font-medium tracking-widest text-muted uppercase">
                Stack
              </span>

              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-edge bg-canvas px-3 py-1 text-sm text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
