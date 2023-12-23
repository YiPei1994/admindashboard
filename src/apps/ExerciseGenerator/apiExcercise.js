import supabase from "../../helpers/supabase";
import { shuffleArray } from "../../helpers/shuffleArray";

export async function generateExcercise(criteria, arrayLength) {
  const { type, intensity } = criteria;

  const { data, error } = await supabase
    .from("exercise")
    .select("*")
    .eq("type", type)
    .eq("diff", intensity);

  if (error) {
    throw new Error("Couldn't fetch exercise");
  }

  return shuffleArray(data);
}
