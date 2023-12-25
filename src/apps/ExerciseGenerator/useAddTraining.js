import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addNewTraining } from "./apiTraining";

export function useAddTraining() {
  const queryClient = useQueryClient();
  const { mutate: addTraining, isLoading } = useMutation({
    mutationFn: addNewTraining,
    onSuccess: () => {
      toast.success("Taining successfully added.");
      queryClient.invalidateQueries({ queryKey: ["trainingSession"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { addTraining, isLoading };
}
