import { useForm } from "react-hook-form";
import { useCreateTodo } from "./useCreateToDo";

function ToDoInput() {
  const { register, handleSubmit, reset } = useForm();

  const { addTodo, isLoading } = useCreateTodo();
  function onSubmit(data) {
    addTodo(data, {
      onSuccess: () => {
        reset();
      },
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        id="taskName"
        type="text"
        disabled={isLoading}
        {...register("taskName", { required: "This is required" })}
      />
      <button>Add to do</button>
    </form>
  );
}

export default ToDoInput;
