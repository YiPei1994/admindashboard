import styled from "styled-components";
import { useExcerciseContext } from "./ExcerciseContextProvider";
import Spinner from "../../ui/Spinner";
import Excercise from "./Excercise";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import CreateExerciseForm from "./createExerciseForm";
import { useState } from "react";

const ExTable = styled.div`
  display: flex;
  justify-content: center;
`;
const ExerciseTable = styled.div`
  width: 35%;
  margin: 0 2rem;
`;
const CreateTable = styled.div`
  width: 58%;
  margin: 0 2rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
`;

const ActionWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
function ExcerciseTable() {
  const {
    isLoading,
    excercises,
    handleGenerate,
    readingExercises,
    isReadingExercises,
    readExercises,
  } = useExcerciseContext();

  const [displayCreate, setDisplayCreate] = useState();
  const [displayAll, setDisplayAll] = useState();
  if (isLoading || isReadingExercises) return <Spinner />;

  const diffMap = {
    easy: 3,
    medium: 4,
    hard: 5,
  };

  const diffNumber = diffMap[excercises?.[0]?.diff] || 0;

  const modifiedEx = excercises?.slice(0, diffNumber);

  function handleCreate() {
    setDisplayCreate((d) => !d);
    setDisplayAll(false);
  }
  function handleAllExcercises() {
    setDisplayAll((d) => !d);
    setDisplayCreate(false);
    if (displayAll) return;
    readingExercises();
  }
  return (
    <ExTable>
      <ExerciseTable>
        <Heading as="h4"></Heading>
        {modifiedEx?.map((exercise) => (
          <Excercise key={exercise.id} exercise={exercise} />
        ))}
        {excercises && (
          <Button onClick={handleGenerate}>regenerate exercises</Button>
        )}
      </ExerciseTable>
      <CreateTable>
        <ActionWrap>
          {" "}
          <Button onClick={handleAllExcercises}>Show all Exercises</Button>
          <Button onClick={handleCreate}>Create new Exercise</Button>
        </ActionWrap>

        {displayAll &&
          readExercises?.map((exercise) => (
            <Excercise key={exercise.id} exercise={exercise} />
          ))}
        {displayCreate && <CreateExerciseForm />}
      </CreateTable>
    </ExTable>
  );
}

export default ExcerciseTable;
