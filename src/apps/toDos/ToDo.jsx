import styled from "styled-components";
import ButtonIcon from "../../ui/ButtonIcon";
import { useDeleteTodo } from "./useDeleteTodo";
import { useUpdateTodo } from "./useUpdateTodo";

import { HiCheck } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { useCurrentUser } from "../../feature/authentication/useCurrentUser";

const Todo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--color-text);
  background-color: white;
  padding: 0.8rem 1.5rem;
  border-radius: var(--border-radius-md);
  margin: 0.5rem 1rem;
`;
const Date = styled.span`
  width: 20%;
`;
const Task = styled.span`
  width: 65%;
`;
const Bns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`;
function ToDo({ todo }) {
  const { taskName, status, created_at, id } = todo;
  const { deletingTodo } = useDeleteTodo();
  const { updatingTodo, isLoading: isUpdating } = useUpdateTodo();
  const { isAuthenticated } = useCurrentUser();
  const formatDate = String(created_at)
    .slice(0, 10)
    .split("-")
    .reverse()
    .join(".");

  return (
    <Todo>
      <Date>{formatDate} </Date>
      <Task>{taskName} </Task>
      {!status && (
        <Bns>
          <ButtonIcon
            size="sm"
            disabled={isUpdating || !isAuthenticated}
            onClick={() => updatingTodo(id)}
          >
            <HiCheck />
          </ButtonIcon>

          <ButtonIcon
            size="sm"
            disabled={isUpdating || !isAuthenticated}
            onClick={() => deletingTodo(id)}
          >
            <HiMiniXMark />
          </ButtonIcon>
        </Bns>
      )}
    </Todo>
  );
}

export default ToDo;
