const API_URL = "https://api.quotable.io/random?maxLength=75";

export async function getRandomQuote() {
  const res = await fetch(`${API_URL}`);
  if (!res.ok) {
    throw new Error("couldnt fetch Quote");
  }
  const data = await res.json();

  return data;
}
