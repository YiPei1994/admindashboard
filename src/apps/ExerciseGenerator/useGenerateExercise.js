import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { generateExcercise } from "./apiExcercise";

export function useGenerateExcercise() {
  const queryClient = useQueryClient();
  const {
    mutate: generatingExcercise,
    isLoading,
    data: excercises,
  } = useMutation({
    mutationFn: generateExcercise,
    onSuccess: () => {
      toast.success("Excercise was successfully generated!");
      queryClient.invalidateQueries({ queryKey: ["excercise"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { generatingExcercise, isLoading, excercises };
}
