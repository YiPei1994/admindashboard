const API_KEY = "1944aa264909b744c4c068b7dff6c706";
const API_FORECAST = "https://api.openweathermap.org/data/2.5/forecast";

export async function getTodayWeather(position) {
  const { lat, lng } = position;

  const res = await fetch(
    `${API_FORECAST}?lat=${lat}&lon=${lng}&cnt=1&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Couldn't fetch Weather");
  }

  const data = await res.json();

  return data;
}
