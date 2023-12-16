import RandomQuoteGenerator from "../apps/randomQuoteGenerator/RandomQuoteGenerator";
import TimeClock from "../apps/timeClock/TimeClock";
import Heading from "../ui/Heading";
import DailyWeather from "../apps/dailyWeather/DailyWeather";

function HeaderContents() {
  return (
    <div>
      <Heading>Welcome back user</Heading>
      <RandomQuoteGenerator />
      <TimeClock />
      <DailyWeather />
    </div>
  );
}

export default HeaderContents;
