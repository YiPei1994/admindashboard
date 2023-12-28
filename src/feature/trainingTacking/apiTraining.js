import { PAGE_SIZE } from "../../helpers/contants";
import supabase from "../../helpers/supabase";

export async function fetchTrainingHistory({ page }) {
  let query = supabase.from("trainingSession").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Couldn't fetch training history");
  }

  return { data, count };
}

export async function addNewTraining(newPlan) {
  const { data, error } = await supabase
    .from("trainingSession")
    .insert([{ ...newPlan }])
    .select();

  if (error) {
    throw new Error("couldnt add new training or log in");
  }

  return data;
}
