import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editExercise } from "./apiExcercise";

export function useEditExercise() {
  const queryClient = useQueryClient();

  const { mutate: editingExercise, isLoading } = useMutation({
    mutationFn: editExercise,
    onSuccess: () => {
      toast.success("Exercise was edited");
      queryClient.invalidateQueries({ queryKey: ["exercise"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editingExercise, isLoading };
}
