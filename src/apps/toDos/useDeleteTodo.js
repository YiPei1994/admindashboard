import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "./apiTodos";
import toast from "react-hot-toast";

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  const { mutate: deletingTodo, isLoading } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      toast.success("Todo was successfully deleted!");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deletingTodo, isLoading };
}
