import { format } from "date-fns";
import { useEffect, useState } from "react";

function TimeClock() {
  const [currentTime, setCurrentTime] = useState();
  const now = new Date();
  const formattedDate = format(now, "MM.dd.yyyy");
  useEffect(function () {
    const formattedTime = format(now, "HH.mm.ss");

    const interval = setInterval(() => {
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  });
  return (
    <div>
      <span>{formattedDate}: </span>
      <span>{currentTime}</span>
    </div>
  );
}

export default TimeClock;
