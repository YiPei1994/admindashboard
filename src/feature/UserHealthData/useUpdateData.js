import { useMutation } from "@tanstack/react-query";
import { updateUserData } from "./apiUsersData";

export function useUpdateData() {
  const { mutate: updateData, isLoading } = useMutation({
    mutationFn: updateUserData,
  });

  return { updateData, isLoading };
}
