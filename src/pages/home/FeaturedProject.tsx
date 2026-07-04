import { Link } from "react-router-dom";

import LiveDataVisual from "@components/LiveDataVisual";
import Reveal from "@components/Reveal";
import { featuredProject } from "@data/homeData";

const FeaturedProject = () => {
  return (
    <section>
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <Reveal>
          <div className="flex flex-col items-start gap-6">
            <p className="text-[12px] font-semibold tracking-[0.25em] text-muted uppercase">
              {featuredProject.label}
            </p>

            <h2 className="font-serif text-[40px] leading-[1.1] font-medium text-ink">
              {featuredProject.title}
            </h2>

            <p className="max-w-lg text-[17px] leading-[1.8] text-ink/75">
              {featuredProject.description}
            </p>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-medium text-canvas transition-shadow hover:shadow-lg"
            >
              View all projects →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="aspect-square w-full">
            <LiveDataVisual />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FeaturedProject;
