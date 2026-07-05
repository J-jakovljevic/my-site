import { useEffect, useState } from "react";

const formatCurrentTime = (timeZone: string) =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date());

export const useCurrentTime = (timeZone: string) => {
  const [time, setTime] = useState(() => formatCurrentTime(timeZone));

  useEffect(() => {
    const id = setInterval(() => setTime(formatCurrentTime(timeZone)), 30_000);
    return () => clearInterval(id);
  }, [timeZone]);

  const [clock, zone] = time.split(" ");
  return { clock, zone };
};
