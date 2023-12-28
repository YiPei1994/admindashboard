import { useQuery } from "@tanstack/react-query";
import { userData } from "./apiUsersData";

export function useData() {
  const { data: usingData, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: userData,
  });

  return { usingData, isLoading };
}
