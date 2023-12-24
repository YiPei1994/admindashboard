import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteExercise } from "./apiExcercise";

export function useDeleteExercise() {
  const queryClient = useQueryClient();
  const { mutate: deletingExercise, isLoading } = useMutation({
    mutationFn: deleteExercise,
    onSuccess: () => {
      toast.success("Exercise was successfully deleted!");
      queryClient.invalidateQueries({ queryKey: ["exercise"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deletingExercise, isLoading };
}
