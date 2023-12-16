import { useQuery } from "@tanstack/react-query";
import { useGeolocation } from "./usePosition";
import { getTodayWeather } from "./apiWeather";

export function useWeather() {
  const { position } = useGeolocation();

  const { data, isLoading } = useQuery({
    queryKey: ["dailyWeather", position],
    queryFn: () => getTodayWeather(position),
  });
  return { data, isLoading };
}
