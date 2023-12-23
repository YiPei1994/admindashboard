import { useState } from "react";
import { HiChevronDown, HiMiniStar } from "react-icons/hi2";

import Dropdownbar from "../../ui/Dropdownbar";
import styled from "styled-components";

const StyledExercise = styled.div`
  margin-bottom: 1rem;
`;
const ExerciseTable = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  background-color: white;

  & span {
    display: block;
    margin-bottom: 5px;
  }
`;

function Excercise({ exercise }) {
  const { name, type, diff, set, rep, rest, favorite } = exercise;
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    console.log("clicked");
    setDisplay((d) => !d);
  }
  return (
    <StyledExercise>
      {diff === "easy" && (
        <Dropdownbar size="large" variation="success" onClick={handleDisplay}>
          {name}
          <HiChevronDown />
        </Dropdownbar>
      )}
      {diff === "medium" && (
        <Dropdownbar size="large" variation="primary" onClick={handleDisplay}>
          {name}
          <HiChevronDown />
        </Dropdownbar>
      )}
      {diff === "hard" && (
        <Dropdownbar size="large" variation="danger" onClick={handleDisplay}>
          {name}
          <HiChevronDown />
        </Dropdownbar>
      )}
      {display && (
        <ExerciseTable>
          <span>name: {name} </span>
          <span>type: {type} </span>
          <span>difficulity: {diff} </span>
          <span>sets: {set} </span>
          <span>reps: {rep} </span>
          <span>resting time: {rest}s </span>
          <span>favorite: {favorite && <HiMiniStar />} </span>
        </ExerciseTable>
      )}
    </StyledExercise>
  );
}

export default Excercise;
