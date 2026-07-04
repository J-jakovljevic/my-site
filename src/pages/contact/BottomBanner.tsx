import Reveal from "@components/Reveal";
import { SparkleIcon } from "@utils/icons";

const BottomBanner = () => {
  return (
    <Reveal delay={0.2}>
      <div className="flex flex-col items-start gap-4 rounded-3xl border border-edge bg-transparent p-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="text-accent shrink-0">
            <SparkleIcon className="h-7 w-7" />
          </span>

          <p className="text-base text-muted lg:whitespace-nowrap">
            Every great product starts with one conversation.
          </p>
        </div>

        <p className="font-cormorant text-accent shrink-0 text-2xl font-black">
          Let&rsquo;s build something great together!
        </p>
      </div>
    </Reveal>
  );
};

export default BottomBanner;
