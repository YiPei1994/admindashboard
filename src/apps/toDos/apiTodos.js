import supabase from "../../helpers/supabase";

export async function getTodos() {
  const { data, error } = await supabase.from("todos").select("*");

  if (error) {
    throw new Error("couldnt fetch todos");
  }

  return data;
}

export async function createTodo(todo) {
  const { data, error } = await supabase
    .from("todos")
    .insert([{ ...todo }])
    .select();

  if (error) {
    throw new Error("couldnt create new todo");
  }

  return data;
}

export async function updateTodo(id) {
  const { data, error } = await supabase
    .from("todos")
    .update([{ status: true }])
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Todo could not be updated");
  }

  return data;
}

export async function deleteTodo(id) {
  const { data, error } = await supabase.from("todos").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Todo could not be deleted");
  }

  return data;
}
