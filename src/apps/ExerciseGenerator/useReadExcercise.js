import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { fetchAllExcercise } from "./apiExcercise";

export function useReadExercise() {
  const queryClient = useQueryClient();
  const {
    mutate: readingExercises,
    isLoading,
    data: readExercises,
  } = useMutation({
    mutationFn: fetchAllExcercise,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["excercise"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { readingExercises, isLoading, readExercises };
}
