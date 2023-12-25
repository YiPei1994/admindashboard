import supabase from "../../helpers/supabase";

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
