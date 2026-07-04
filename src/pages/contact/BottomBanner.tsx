import Reveal from "@components/Reveal";
import { SparkleIcon } from "@utils/icons";

const CARD_CLASSES =
  "flex flex-col items-center gap-2 rounded-3xl border border-edge bg-transparent p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8 md:gap-4 md:p-7";

const sparkle = (
  <span className="text-accent shrink-0">
    <SparkleIcon className="h-7 w-7" />
  </span>
);

const togetherLine = (
  <p className="font-cormorant text-accent shrink-0 text-center text-2xl font-black">
    Let&rsquo;s build something great together!
  </p>
);

const ConversationLine = ({ centered }: { centered?: boolean }) => (
  <p
    className={`text-base text-muted lg:whitespace-nowrap ${centered ? "text-center" : ""}`}
  >
    Every great product starts with one conversation.
  </p>
);

const BottomBanner = () => {
  return (
    <Reveal delay={0.2}>
      {/* Below 730px: icon centered between the two lines of text */}
      <div className={`${CARD_CLASSES} min-[730px]:hidden`}>
        <div className="flex items-center gap-3">
          <ConversationLine centered />
        </div>

        {sparkle}
        {togetherLine}
      </div>

      {/* 730px and up: icon inline with the first line */}
      <div className={`hidden ${CARD_CLASSES} min-[730px]:flex`}>
        <div className="flex items-center gap-3">
          {sparkle}
          <ConversationLine />
        </div>

        {togetherLine}
      </div>
    </Reveal>
  );
};

export default BottomBanner;
