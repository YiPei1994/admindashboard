import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteWorkout } from "./apiOutdoor";

export function useDeleteWorkout() {
  const queryClient = useQueryClient();
  const { mutate: deletingWorkout, isLoading } = useMutation({
    mutationFn: deleteWorkout,
    onSuccess: () => {
      toast.success("Workout was successfully deleted!");
      queryClient.invalidateQueries({ queryKey: ["outdoorTrainings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deletingWorkout, isLoading };
}
