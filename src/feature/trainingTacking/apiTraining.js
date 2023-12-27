import supabase from "../../helpers/supabase";

export async function fetchTrainingHistory() {
  const { data, error } = await supabase.from("trainingSession").select("*");

  if (error) {
    throw new Error("Couldn't fetch training history");
  }

  return data;
}

export async function addNewTraining(newPlan) {
  const { data, error } = await supabase
    .from("trainingSession")
    .insert([{ ...newPlan }])
    .select();

  if (error) {
    throw new Error("couldnt add new training");
  }

  return data;
}
