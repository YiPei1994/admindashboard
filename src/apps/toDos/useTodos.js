import { useQuery } from "@tanstack/react-query";
import { getTodos } from "./apiTodos";

export function useTodos() {
  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  return { todos, isLoading };
}
