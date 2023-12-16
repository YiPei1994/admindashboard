import Heading from "../../ui/Heading";
import SpinnerMini from "../../ui/SpinnerMini";
import { useWeather } from "./useWeather";

function DailyWeather() {
  const { data, isLoading } = useWeather();
  if (isLoading) return <SpinnerMini />;

  const { list, city } = data;

  const { name } = city;

  const celsius = 280 - list[0].main.temp;
  return (
    <div>
      <Heading as="h5">{name}</Heading>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${list[0].weather[0].icon}.png`}
          alt="weatherIcon"
        />
        <p>{Math.round(celsius)} °C</p>
      </div>
    </div>
  );
}

export default DailyWeather;
