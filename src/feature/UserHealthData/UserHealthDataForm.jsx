import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import ButtonIcon from "../../ui/ButtonIcon";

import { useState } from "react";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import styled from "styled-components";

import { useData } from "./useData";
import Spinner from "../../ui/Spinner";
import { useUpdateData } from "./useUpdateData";

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
  const { usingData = {} } = useData();
  const { updateData, isLoading } = useUpdateData();
  const [bmi, setBmi] = useState(0);
  const [calories, setCalories] = useState(0);

  if (isLoading) return <Spinner />;

  const {
    user_age,
    user_BMR,
    user_gender,
    user_height,
    user_weight,
    user_calories,
    time_per_week,
  } = usingData;

  function handleUpdate(e, field) {
    const value = e.target.value;

    if (!value) return;
    updateData({ [field]: value });
  }
  function handleBmi(e) {
    e.preventDefault();
    const height = user_height / 100;
    const weight = user_weight;
    if (!height || !weight) return;
    setBmi(Math.round(weight / (height * height)));
  }

  function handleCalories(e) {
    e.preventDefault();
    const height = user_height;
    const weight = user_weight;
    const gender = user_gender;
    const age = user_age;
    const times = time_per_week;
    if (!gender) return;

    if (gender === "male") {
      setCalories(
        Math.floor(
          88.362 + 13.4 * weight + 4.8 * height - 5.8 * age + times * 100
        )
      );
    }
    if (gender === "female") {
      setCalories(
        Math.floor(447 + 9.2 * weight + 3.8 * height - 4.7 * age + times * 100)
      );
    }
  }

  return (
    <Form type="regular">
      <FormRow label="User gender">
        <Select
          id="user_gender"
          defaultValue={user_gender}
          disabled={isLoading}
          onBlur={(e) => handleUpdate(e, "user_gender")}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </FormRow>
      <FormRow label="User age">
        <Input
          type="number"
          id="user_age"
          defaultValue={user_age}
          disabled={isLoading}
          onBlur={(e) => handleUpdate(e, "user_age")}
        />
      </FormRow>
      <FormRow label="User height in metric">
        <Input
          type="number"
          id="user_height"
          defaultValue={user_height}
          disabled={isLoading}
          onBlur={(e) => handleUpdate(e, "user_height")}
        />
      </FormRow>
      <FormRow label="User weight in kilos">
        <Input
          type="number"
          id="user_weight"
          defaultValue={user_weight}
          disabled={isLoading}
          onBlur={(e) => handleUpdate(e, "user_weight")}
        />
      </FormRow>
      <FormRow label="Exercise per week">
        <Input
          type="number"
          id="time_per_week"
          defaultValue={time_per_week}
          disabled={isLoading}
          onBlur={(e) => handleUpdate(e, "time_per_week")}
        />
      </FormRow>

      <ComputeWrap>
        {" "}
        <FormRow label="User BMR">
          <Input
            type="number"
            id="user_BMR"
            defaultValue={user_BMR}
            value={bmi}
            disabled={isLoading}
            onBlur={(e) => handleUpdate(e, "user_BMR")}
          />
        </FormRow>
        <ButtonIcon onClick={handleBmi}>
          <HiOutlineCog6Tooth />
        </ButtonIcon>
      </ComputeWrap>
      <ComputeWrap>
        <FormRow label="User calories per day">
          <Input
            type="number"
            id="calories"
            defaultValue={user_calories}
            value={calories}
            disabled={isLoading}
            onBlur={(e) => handleUpdate(e, "user_calories")}
          />
        </FormRow>
        <ButtonIcon onClick={handleCalories}>
          <HiOutlineCog6Tooth />
        </ButtonIcon>
      </ComputeWrap>
    </Form>
  );
}

export default UserHealthDataForm;
