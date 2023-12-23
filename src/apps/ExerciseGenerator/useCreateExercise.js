import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createExercise } from "./apiExcercise";
import toast from "react-hot-toast";

export function useCreateExcercise() {
  const queryClient = useQueryClient();
  const { mutate: creatingExcercise, isLoading } = useMutation({
    mutationFn: createExercise,
    onSuccess: () => {
      toast.success("Excercise successfully added.");
      queryClient.invalidateQueries({ queryKey: ["exercise"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { creatingExcercise, isLoading };
}
