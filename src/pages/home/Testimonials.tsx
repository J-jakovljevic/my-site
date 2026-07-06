import Reveal from "@components/Reveal";
import { testimonials } from "@data/homeData";
import { LinkedInIcon } from "@utils/icons";

const getInitials = (name: string) => {
  const parts = name.split(" ");
  return `${parts[0][0]}${parts[parts.length - 1][0]}`;
};

const Testimonials = () => {
  return (
    <section className="flex flex-col gap-10">
      <Reveal>
        <p className="text-[12px] font-semibold tracking-[0.25em] text-muted uppercase">
          What people say about working with me
        </p>
      </Reveal>

      {testimonials.map((testimonial, i) => (
        <Reveal key={testimonial.name} delay={i * 0.05}>
          <figure className="flex flex-col gap-6 rounded-3xl border border-edge-soft bg-surface p-6 shadow-soft sm:p-10">
            <blockquote className="flex flex-col gap-4 text-[17px] leading-[1.8] text-ink/80">
              {testimonial.quote.map((paragraph, pi) => (
                <p key={pi}>{paragraph}</p>
              ))}
            </blockquote>

            <figcaption className="flex flex-wrap items-center gap-4 border-t border-edge pt-6">
              <span className="bg-accent/10 text-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-serif text-lg font-medium">
                {getInitials(testimonial.name)}
              </span>

              <div className="flex flex-col">
                <span className="font-medium text-ink">{testimonial.name}</span>

                <span className="text-sm text-muted">{testimonial.title}</span>
              </div>

              {testimonial.source && (
                <span className="ml-auto flex items-center gap-1.5 text-sm text-muted">
                  <LinkedInIcon className="h-4 w-4" />

                  {testimonial.source}
                </span>
              )}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </section>
  );
};

export default Testimonials;
