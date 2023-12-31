import styled from "styled-components";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import { useCreateWorkout } from "./useCreateWorkout";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useOutdoorTraining } from "./OutdoorTrainingContext";

const Select = styled.select`
  border: 1px solid var(--color-text);
  background-color: white;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
  width: 200px;
`;

const FormRowSmall = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
const ComputeWrap = styled.div`
  position: relative;
  padding: 1.2rem 0;
  & button {
    position: absolute;
    top: 20px;
    left: 200px;
  }
`;

function TrainingForm() {
  const { register, handleSubmit, reset, getValues, setValue } = useForm();

  const { creatingWorkout, isLoading } = useCreateWorkout();
  const { setDisplay, lat, lng } = useOutdoorTraining();

  function handleCalCandance(e) {
    e.preventDefault();
    const type = getValues("type");
    const km = getValues("distance");
    const min = getValues("duration");
    if (type === "running") setValue("cadance", Math.floor(min / km));
    if (type === "cycling") setValue("cadance", Math.floor(km / (min / 60)));
  }

  function handleCalCalories(e) {
    e.preventDefault();
    const speed = getValues("cadance");
    const type = getValues("type");
    const min = getValues("duration");
    if (type === "running")
      setValue("calories", Math.floor(speed * min * 1.28));
    if (type === "cycling")
      setValue("calories", Math.floor(((speed * min) / 2) * 1.18));
  }

  function onSubmit(data) {
    if (!data) return;

    creatingWorkout(data);
    reset();
    setDisplay(false);
  }

  function handleCancel(e) {
    e.preventDefault();
    setDisplay(false);
    reset();
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowSmall label="Type">
        <label>Type: </label>
        <Select id="type" {...register("type")}>
          <option value="running">running</option>
          <option value="cycling">cycling</option>
        </Select>
      </FormRowSmall>
      <FormRowSmall label="Distance">
        <label>Distance: </label>
        <Input
          id="distance"
          type="number"
          placeholder="km"
          {...register("distance")}
        />
      </FormRowSmall>
      <FormRowSmall label="Duration">
        <label>Duration: </label>
        <Input
          id="duration"
          type="number"
          placeholder="min"
          {...register("duration")}
        />
      </FormRowSmall>
      <ComputeWrap>
        <FormRowSmall label="Cadence">
          <label>Speed/Pace: </label>
          <Input
            id="cadance"
            type="number"
            placeholder="pace/speed"
            {...register("cadance")}
          />
        </FormRowSmall>
        <ButtonIcon onClick={handleCalCandance}>
          <HiOutlineCog6Tooth />
        </ButtonIcon>
      </ComputeWrap>
      <ComputeWrap>
        <FormRowSmall label="calories">
          <label>Calories: </label>
          <Input
            id="calories"
            type="number"
            placeholder="calories"
            {...register("calories")}
          />
        </FormRowSmall>
        <ButtonIcon onClick={handleCalCalories}>
          <HiOutlineCog6Tooth />
        </ButtonIcon>
      </ComputeWrap>
      <Input id="lat" type="hidden" value={lat} {...register("lat")} />
      <Input id="lng" type="hidden" value={lng} {...register("lng")} />
      <FormRowSmall>
        <Button
          variation="secondary"
          type="reset"
          onClick={handleCancel}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>Save workout</Button>
      </FormRowSmall>
    </Form>
  );
}

export default TrainingForm;
