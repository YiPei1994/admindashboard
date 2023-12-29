import { useQuery } from "@tanstack/react-query";

import { getOutdoorData } from "./apiOutdoor";

export function useOutdoorData() {
  const { data: usingData, isLoading } = useQuery({
    queryKey: ["outdoorTrainings"],
    queryFn: getOutdoorData,
  });

  return { usingData, isLoading };
}
