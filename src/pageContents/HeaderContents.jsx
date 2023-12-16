import RandomQuoteGenerator from "../apps/randomQuoteGenerator/RandomQuoteGenerator";
import TimeClock from "../apps/timeClock/TimeClock";
import Heading from "../ui/Heading";
import DailyWeather from "../apps/dailyWeather/DailyWeather";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
`;

const Wrapper = styled.div`
  width: 50%;
  background-color: var(--color-container);
  border-radius: 2rem;
  padding: 3rem 3rem;
  height: 100%;
  min-height: 140px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

function HeaderContents() {
  return (
    <Header>
      <Wrapper>
        <Heading as="h1">Welcome back user</Heading>
        <RandomQuoteGenerator />
      </Wrapper>
      <TimeClock />
      <DailyWeather />
    </Header>
  );
}

export default HeaderContents;
