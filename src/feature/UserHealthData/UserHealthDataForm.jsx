import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useCurrentUser } from "../authentication/useCurrentUser";
import ButtonIcon from "../../ui/ButtonIcon";

import { useState } from "react";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import styled from "styled-components";
import { useAddUserData } from "./useAddUserData";

const ComputeWrap = styled.div`
  position: relative;
  padding: 1.2rem 0;
  & button {
    position: absolute;
    top: 20px;
    left: 200px;
  }
`;

const Select = styled.select`
  border: 1px solid var(--color-text);
  background-color: white;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
  width: 200px;
`;
function UserHealthDataForm() {
  const { register, handleSubmit, reset, formState, getValues } = useForm();

  const { errors } = formState;
  const {
    user: {
      email,
      user_metadata: { fullName },
    },
  } = useCurrentUser();
  const { addData, isLoading } = useAddUserData();
  const [bmi, setBmi] = useState(0);
  const [calories, setCalories] = useState(0);

  function handleBmi(e) {
    e.preventDefault();
    const height = getValues().user_height / 100;
    const weight = getValues().user_weight;
    if (!height || !weight) return;
    setBmi(Math.round(weight / (height * height)));
  }

  function handleCalories(e) {
    e.preventDefault();
    const height = getValues().user_height;
    const weight = getValues().user_weight;
    const gender = getValues().user_gender;
    const age = getValues().user_age;
    const times = getValues().time_per_week;
    if (!gender) return;

    if (gender === "male") {
      setCalories(
        Math.floor(66 + 13.7 * weight + 5 * height - 6.8 * age + times * 100)
      );
    }
    if (gender === "female") {
      setCalories(
        Math.floor(655 + 9.6 * weight + 1.8 * height - 4.7 * age + times * 100)
      );
    }
  }
  function onSubmit(data) {
    console.log(data);
    addData(data);
  }
  return (
    <Form type="regular" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="User name" error={errors?.user_name?.message}>
        <Input
          type="text"
          id="user_name"
          defaultValue={fullName}
          readOnly
          {...register("user_name")}
        />
      </FormRow>

      <FormRow label="User email" error={errors?.user_email?.message}>
        <Input
          type="text"
          id="user_email"
          defaultValue={email}
          readOnly
          {...register("user_email")}
        />
      </FormRow>
      <FormRow label="User gender" error={errors?.user_gender?.message}>
        <Select
          id="user_gender"
          {...register("user_gender", { required: "This is required" })}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </FormRow>
      <FormRow label="User age" error={errors?.user_age?.message}>
        <Input
          type="number"
          id="user_age"
          {...register("user_age", { required: "This is required" })}
        />
      </FormRow>
      <FormRow
        label="User height in metric"
        error={errors?.user_height?.message}
      >
        <Input
          type="number"
          id="user_height"
          {...register("user_height", { required: "This is required" })}
        />
      </FormRow>
      <FormRow
        label="User weight in kilos"
        error={errors?.user_weight?.message}
      >
        <Input
          type="number"
          id="user_weight"
          {...register("user_weight", { required: "This is required" })}
        />
      </FormRow>
      <FormRow
        label="Exercise per week"
        error={errors?.times_per_week?.message}
      >
        <Input
          type="number"
          id="time_per_week"
          {...register("time_per_week", { required: "This is required" })}
        />
      </FormRow>

      <ComputeWrap>
        {" "}
        <FormRow label="User BMI" error={errors?.user_BMI?.message}>
          <Input
            type="number"
            id="user_BMI"
            value={bmi}
            {...register("user_BMI", { required: "This is required" })}
          />
        </FormRow>
        <ButtonIcon onClick={handleBmi}>
          <HiOutlineCog6Tooth />
        </ButtonIcon>
      </ComputeWrap>
      <ComputeWrap>
        <FormRow
          label="User calories per day"
          error={errors?.calories?.message}
        >
          <Input
            type="number"
            id="calories"
            value={calories}
            {...register("calories", { required: "This is required" })}
          />
        </FormRow>
        <ButtonIcon onClick={handleCalories}>
          <HiOutlineCog6Tooth />
        </ButtonIcon>
      </ComputeWrap>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isLoading}>
          Reset
        </Button>
        <Button type="submit" disabled={isLoading}>
          Save Data
        </Button>
      </FormRow>
    </Form>
  );
}

export default UserHealthDataForm;
