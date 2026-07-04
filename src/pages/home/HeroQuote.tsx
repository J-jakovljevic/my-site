import Reveal from "@components/Reveal";
import { profile } from "@data/profileData";

const HeroQuote = () => {
  return (
    <section>
      <Reveal>
        <blockquote className="mx-auto max-w-xl text-center text-lg text-muted italic">
          {profile.tagline}
        </blockquote>
      </Reveal>
    </section>
  );
};

export default HeroQuote;
