import { useSearchParams } from "react-router-dom";
import CreateExerciseForm from "./createExerciseForm";
import Modal from "../../ui/Modal";
import Excercise from "./Excercise";
import SortBy from "../../ui/SortBy";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useExcerciseContext } from "./ExcerciseContextProvider";
import styled from "styled-components";
import { useState } from "react";

const ActionWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

function ExerciseOperations() {
  const { isReadingExercises, readExercises } = useExcerciseContext();
  const [displayAll, setDisplayAll] = useState(false);
  const [searchParams] = useSearchParams();

  if (isReadingExercises) return <Spinner />;
  const sortBy = searchParams.get("sortBy") || "diff-asc";

  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedExercise = readExercises.sort((a, b) => {
    const valueA =
      typeof a[field] === "string" ? a[field].toLowerCase() : a[field];
    const valueB =
      typeof b[field] === "string" ? b[field].toLowerCase() : b[field];

    // Use localeCompare for string comparison
    return valueA.localeCompare(valueB) * modifier;
  });
  return (
    <Modal>
      <ActionWrap>
        <Button onClick={() => setDisplayAll((d) => !d)}>
          Display all Exercises
        </Button>
        <Modal.Open opens="create">
          <Button>Create new Exercise</Button>
        </Modal.Open>
        <SortBy
          options={[
            {
              value: "diff-asc",
              label: "Sort by difficulity",
            },
            {
              value: "type-asc",
              label: "Sort by type",
            },
            {
              value: "name-asc",
              label: "Sort by name",
            },
          ]}
        />
      </ActionWrap>
      <Modal.Window name="create">
        <CreateExerciseForm type="modal" />
      </Modal.Window>

      {displayAll &&
        sortedExercise?.map((exercise) => (
          <Excercise key={exercise.id} exercise={exercise} type="pill" />
        ))}
    </Modal>
  );
}

export default ExerciseOperations;
