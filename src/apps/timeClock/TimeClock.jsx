import { format } from "date-fns";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { HiCalendarDays } from "react-icons/hi2";
import { HiOutlineClock } from "react-icons/hi2";

const Time = styled.div`
  background-color: var(--color-container);
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 2rem;
  min-height: 140px;
  justify-content: center;
  width: 12.5%;
`;

const Wrap = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
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
    <Time>
      <Wrap>
        <HiCalendarDays />
        <span>{formattedDate}</span>
      </Wrap>
      <Wrap>
        <HiOutlineClock />
        <span>{currentTime}</span>
      </Wrap>
    </Time>
  );
}

export default TimeClock;
