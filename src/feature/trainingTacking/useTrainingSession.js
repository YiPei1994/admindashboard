import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTrainingHistory } from "./apiTraining";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../helpers/contants";

export function useTraningSession() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data, isLoading = {} } = useQuery({
    queryKey: ["trainingSession", page],
    queryFn: () => fetchTrainingHistory({ page }),
  });
  // prefetch
  const trainingHistory = data?.data.sort((a, b) => b.id - a.id);
  const count = data?.count;
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["trainingSession", page + 1],
      queryFn: () => fetchTrainingHistory({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["trainingSession", page - 1],
      queryFn: () => fetchTrainingHistory({ page: page - 1 }),
    });

  return { trainingHistory, isLoading, count };
}
