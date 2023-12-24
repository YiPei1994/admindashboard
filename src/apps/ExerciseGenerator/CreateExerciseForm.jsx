import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateExcercise } from "./useCreateExercise";
import { useEditExercise } from "./useEditExercise";

function CreateExerciseForm({ exerciseToEdit = {}, onCloseModal }) {
  const { creatingExcercise, isLoading } = useCreateExcercise();
  const { editingExercise, isLoading: isEditing } = useEditExercise();

  const { id: exerciseId, ...editValues } = exerciseToEdit;

  const isEditSession = Boolean(exerciseId);

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const isWorking = isEditing || isLoading;
  function onSubmit(data) {
    if (isEditSession)
      editingExercise(
        { id: exerciseId, editData: { ...data } },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      creatingExcercise(
        { ...data },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Exercise name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", { required: "This is required" })}
        />
      </FormRow>

      <FormRow label="Exercise type" error={errors?.type?.message}>
        <Input
          type="text"
          id="type"
          disabled={isWorking}
          {...register("type", { required: "This is required" })}
        />
      </FormRow>
      <FormRow label="Exercise difficulity" error={errors?.diff?.message}>
        <Input
          type="text"
          id="diff"
          disabled={isWorking}
          {...register("diff", { required: "This is required" })}
        />
      </FormRow>
      <FormRow label="Exercise sets" error={errors?.sets?.message}>
        <Input
          type="number"
          id="set"
          disabled={isWorking}
          defaultValue={3}
          {...register("set", { required: "This is required" })}
        />
      </FormRow>

      <FormRow label="Exercise reps" error={errors?.reps?.message}>
        <Input
          type="number"
          id="rep"
          disabled={isWorking}
          defaultValue={8}
          {...register("rep", { required: "This is required" })}
        />
      </FormRow>

      <FormRow label="Exercise rest" error={errors?.rest?.message}>
        <Input
          type="number"
          id="rest"
          disabled={isWorking}
          defaultValue={120}
          {...register("rest", { required: "This is required" })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          onClick={onCloseModal}
          type="reset"
          disabled={isWorking}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {" "}
          {isEditSession ? "Edit" : "Add"} Exercise
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateExerciseForm;
