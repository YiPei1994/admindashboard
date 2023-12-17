import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "./apiTodos";
import toast from "react-hot-toast";

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  const { mutate: updatingTodo, isLoading } = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      toast.success("Todo was successfully updated!");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updatingTodo, isLoading };
}
