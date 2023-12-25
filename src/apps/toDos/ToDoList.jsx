import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import ToDo from "./ToDo";
import ToDoInput from "./ToDoInput";
import { useTodos } from "./useTodos";

const Todo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 18rem;
  width: 100%;
`;

const TodoWrap1 = styled.div`
  padding: 1rem;
  margin: 0 1rem;
  flex: 54%;
  overflow-y: auto;
  height: 100%;
  border: 1px solid var(--color-text);
  border-radius: var(--border-radius-lg);
`;
const TodoWrap2 = styled.div`
  padding: 1rem;
  margin: 0 1rem;
  flex: 40%;
  overflow-y: auto;
  height: 100%;
  border: 1px solid var(--color-text);
  border-radius: var(--border-radius-lg);
`;
function ToDoList() {
  const { todos, isLoading } = useTodos();

  if (isLoading) return <Spinner />;
  const unfinishedTodos = todos.filter((todo) => todo.status === false);

  const finishedTodos = todos.filter((todo) => todo.status === true);
  return (
    <Todo>
      <ToDoInput />
      <TodoWrap1>
        {unfinishedTodos?.map((todo, i) => (
          <ToDo key={i} todo={todo} />
        ))}
      </TodoWrap1>
      <TodoWrap2>
        {finishedTodos?.map((todo, i) => (
          <ToDo key={i} todo={todo} />
        ))}
      </TodoWrap2>
    </Todo>
  );
}

export default ToDoList;
