import supabase from "../../helpers/supabase";

export async function generateExcercise(criteria) {
  const { type, intensity } = criteria;

  const { data, error } = await supabase
    .from("exercise")
    .select("*")
    .eq("type", type)
    .eq("diff", intensity);

  if (error) {
    throw new Error("Couldn't fetch exercise");
  }

  return data;
}
