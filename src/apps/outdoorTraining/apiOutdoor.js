import supabase from "../../helpers/supabase";

export async function getOutdoorData() {
  let { data, error } = await supabase.from("outdoorTrainings").select("*");

  if (error) {
    throw new Error("couldnt find the data");
  }

  return data;
}

export async function createWorkout(newWorkout) {
  const { data, error } = await supabase
    .from("outdoorTrainings")
    .insert([{ ...newWorkout }]);

  if (error) {
    throw new Error("couldnt create new Workout");
  }

  return data;
}

export async function deleteWorkout(id) {
  const { data, error } = await supabase
    .from("outdoorTrainings")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Workout could not be deleted");
  }

  return data;
}
