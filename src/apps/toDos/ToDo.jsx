import { useDeleteTodo } from "./useDeleteTodo";
import { useUpdateTodo } from "./useUpdateTodo";

import { HiCheck } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";

function ToDo({ todo }) {
  const { taskName, status, created_at, id } = todo;
  const { deletingTodo, isLoading } = useDeleteTodo();
  const { updatingTodo, isLoading: isUpdating } = useUpdateTodo();
  const formatDate = String(created_at)
    .slice(0, 9)
    .split("-")
    .reverse()
    .join(".");

  return (
    <div>
      <span>{formatDate} </span>
      <span>{taskName} </span>

      <span> {status ? "Done" : "unfinished"}</span>
      {!status && (
        <button disabled={isUpdating} onClick={() => updatingTodo(id)}>
          <HiCheck />
        </button>
      )}
      {status && (
        <button disabled={isLoading} onClick={() => deletingTodo(id)}>
          <HiMiniXMark />
        </button>
      )}
    </div>
  );
}

export default ToDo;
