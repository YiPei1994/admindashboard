import supabase from "../../helpers/supabase";

export async function userData() {
  let { data, error } = await supabase.from("users").select().single();

  if (error) {
    throw new Error("couldnt find the data");
  }

  return data;
}

export async function updateUserData(newData) {
  const { data, error } = await supabase
    .from("users")
    .update(newData)
    .eq("id", 1)
    .single();

  if (error) {
    throw new Error("couldnt update Data");
  }

  return data;
}

export async function addUserData(userData) {
  const { data, error } = await supabase
    .from("users")
    .insert([{ ...userData }])
    .select();

  if (error) {
    throw new Error("couldnt add new Data");
  }

  return data;
}
