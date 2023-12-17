import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "./apiTodos";
import toast from "react-hot-toast";

export function useCreateTodo() {
  const queryClient = useQueryClient();
  const { mutate: addTodo, isLoading } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      toast.success("Todos successfully added");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addTodo, isLoading };
}
