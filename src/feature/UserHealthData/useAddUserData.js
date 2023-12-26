import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addUserData } from "./apiUsersData";

export function useAddUserData() {
  const queryClient = useQueryClient();
  const { mutate: addData, isLoading } = useMutation({
    mutationFn: addUserData,
    onSuccess: () => {
      toast.success("User data successfully added.");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { addData, isLoading };
}
