import ClosingStatement from "@pages/home/ClosingStatement";
import EngineeringPipeline from "@pages/home/EngineeringPipeline";
import ExperienceStats from "@pages/home/ExperienceStats";
import FeaturedProject from "@pages/home/FeaturedProject";
import Hero from "@pages/home/Hero";
import HeroQuote from "@pages/home/HeroQuote";

const Home = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-20 px-6 pb-16">
      <Hero />
      <HeroQuote />
      <ExperienceStats />
      <EngineeringPipeline />
      <FeaturedProject />
      <ClosingStatement />
    </div>
  );
};

export default Home;
