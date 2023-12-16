import { useQuery } from "@tanstack/react-query";
import { getRandomQuote } from "./apiRandomQuote";

export function useRandomQuote() {
  const { data: quote, isLoading } = useQuery({
    queryKey: ["randomQuote"],
    queryFn: getRandomQuote,
  });

  return { quote, isLoading };
}
