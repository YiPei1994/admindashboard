import Spinner from "../../ui/Spinner";
import ToDo from "./ToDo";
import ToDoInput from "./ToDoInput";
import { useTodos } from "./useTodos";

function ToDoList() {
  const { todos, isLoading } = useTodos();

  if (isLoading) return <Spinner />;
  const unfinishedTodos = todos.filter((todo) => todo.status === false);
  const finishedTodos = todos.filter((todo) => todo.status === true);
  return (
    <div>
      <ToDoInput />
      <div>
        {unfinishedTodos?.map((todo, i) => (
          <ToDo key={i} todo={todo} />
        ))}
      </div>
      <div>
        {finishedTodos?.map((todo, i) => (
          <ToDo key={i} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
