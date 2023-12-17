import { useForm } from "react-hook-form";
import { useCreateTodo } from "./useCreateToDo";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import styled from "styled-components";

const Toinput = styled.form`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem auto;
`;
function ToDoInput() {
  const { register, handleSubmit, reset } = useForm();

  const { addTodo, isLoading } = useCreateTodo();
  function onSubmit(data) {
    if (!data) return;
    addTodo(data, {
      onSuccess: () => {
        reset();
      },
    });
  }
  return (
    <Toinput onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="taskName"
        type="text"
        disabled={isLoading}
        {...register("taskName", { required: "This is required" })}
      />
      <Button>Add to do</Button>
    </Toinput>
  );
}

export default ToDoInput;
