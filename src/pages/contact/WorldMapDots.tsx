import MapSvg from "@assets/map.svg?react";
import Reveal from "@components/Reveal";

const WorldMapDots = () => {
  return (
    <Reveal>
      <MapSvg
        role="img"
        aria-label="world map with dots"
        className="h-auto w-[260px] text-edge opacity-90 sm:w-[350px]"
      />
    </Reveal>
  );
};

export default WorldMapDots;
