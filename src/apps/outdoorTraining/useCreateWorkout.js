import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createWorkout } from "./apiOutdoor";

export function useCreateWorkout() {
  const queryClient = useQueryClient();
  const { mutate: creatingWorkout, isLoading } = useMutation({
    mutationFn: createWorkout,
    onSuccess: () => {
      toast.success("Workout successfully added.");
      queryClient.invalidateQueries({ queryKey: ["outdoorTrainings"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { creatingWorkout, isLoading };
}
