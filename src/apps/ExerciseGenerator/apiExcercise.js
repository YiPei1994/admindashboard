import supabase from "../../helpers/supabase";
import { shuffleArray } from "../../helpers/shuffleArray";

export async function fetchAllExcercise() {
  const { data, error } = await supabase.from("exercise").select("*");

  if (error) {
    throw new Error("Couldn't fetch exercise");
  }

  return data;
}

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

  return shuffleArray(data);
}

export async function createExercise(newExercise) {
  const { data, error } = await supabase
    .from("exercise")
    .insert([{ ...newExercise }])
    .select();

  if (error) {
    throw new Error("couldnt create new exercise");
  }

  return data;
}

export async function editExercise(newData) {
  const { id: editId, editData } = newData;
  const { data, error } = await supabase
    .from("exercise")
    .update({ ...editData })
    .eq("id", editId)
    .single();

  if (error) {
    throw new Error("Couldn't edit exercise");
  }

  return data;
}

export async function deleteExercise(id) {
  const { data, error } = await supabase.from("exercise").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Exercise could not be deleted");
  }

  return data;
}
