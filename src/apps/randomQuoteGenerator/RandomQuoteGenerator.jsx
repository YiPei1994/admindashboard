import SpinnerMini from "../../ui/SpinnerMini";
import { useRandomQuote } from "./useRandomQuote";

function RandomQuoteGenerator() {
  const { quote, isLoading } = useRandomQuote();

  if (isLoading) return <SpinnerMini />;
  return <div>“{quote.content}”</div>;
}

export default RandomQuoteGenerator;
