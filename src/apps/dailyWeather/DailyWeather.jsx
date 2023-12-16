import styled from "styled-components";
import Heading from "../../ui/Heading";
import SpinnerMini from "../../ui/SpinnerMini";
import { useWeather } from "./useWeather";

const WeatherWrap = styled.div`
  background: var(--color-container);
  width: 12.5%;
  height: auto;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 3rem;
  min-height: 140px;
`;
const Wrap = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
function DailyWeather() {
  const { data, isLoading } = useWeather();
  if (isLoading) return <SpinnerMini />;

  const { list, city } = data;

  const { name } = city;

  const celsius = 280 - list[0].main.temp;
  return (
    <WeatherWrap>
      <Heading as="h5">{name}</Heading>
      <img
        src={`https://openweathermap.org/img/wn/${list[0].weather[0].icon}.png`}
        alt="weatherIcon"
      />
      <Wrap>
        <span>{list[0].weather[0].main}</span>
        <p>{Math.round(celsius)} °C</p>
      </Wrap>
    </WeatherWrap>
  );
}

export default DailyWeather;
