import { useQuery } from "@tanstack/react-query";

import { fetchAllExcercise } from "./apiExcercise";

export function useReadExercise() {
  const { isLoading, data: readExercises } = useQuery({
    queryKey: ["exercise"],
    queryFn: fetchAllExcercise,
  });

  return { isLoading, readExercises };
}
