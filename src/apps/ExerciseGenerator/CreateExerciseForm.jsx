import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateExcercise } from "./useCreateExercise";

function CreateExerciseForm({ exerciseToEdit = {} }) {
  const { register, handleSubmit, formState, reset } = useForm();
  const { creatingExcercise, isLoading } = useCreateExcercise();
  const { errors } = formState;

  const { id: exerciseId, ...editValues } = exerciseToEdit;

  const isEditSession = Boolean(exerciseId);

  function onSubmit(data) {
    if (!data) return;
    creatingExcercise(data, {
      onSuccess: () => {
        reset();
      },
    });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Exercise name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isLoading}
          {...register("name", { required: "This is required" })}
        />
      </FormRow>

      <FormRow label="Exercise type" error={errors?.type?.message}>
        <Input
          type="text"
          id="type"
          disabled={isLoading}
          {...register("type", { required: "This is required" })}
        />
      </FormRow>
      <FormRow label="Exercise difficulity" error={errors?.diff?.message}>
        <Input
          type="text"
          id="diff"
          disabled={isLoading}
          {...register("diff", { required: "This is required" })}
        />
      </FormRow>
      <FormRow label="Exercise sets" error={errors?.sets?.message}>
        <Input
          type="number"
          id="set"
          disabled={isLoading}
          {...register("set", { required: "This is required" })}
        />
      </FormRow>

      <FormRow label="Exercise reps" error={errors?.reps?.message}>
        <Input
          type="number"
          id="rep"
          disabled={isLoading}
          {...register("rep", { required: "This is required" })}
        />
      </FormRow>

      <FormRow label="Exercise rest" error={errors?.rest?.message}>
        <Input
          type="number"
          id="rest"
          disabled={isLoading}
          defaultValue={60}
          {...register("rest", { required: "This is required" })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isLoading}>
          Cancel
        </Button>
        <Button disabled={isLoading}>Add Exercise</Button>
      </FormRow>
    </Form>
  );
}

export default CreateExerciseForm;
