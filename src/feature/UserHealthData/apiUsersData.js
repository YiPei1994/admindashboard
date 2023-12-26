import supabase from "../../helpers/supabase";

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
