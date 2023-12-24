import styled from "styled-components";
import { useExcerciseContext } from "./ExcerciseContextProvider";
import Spinner from "../../ui/Spinner";
import Excercise from "./Excercise";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import CreateExerciseForm from "./createExerciseForm";
import Modal from "../../ui/Modal";
import { HiArrowPath } from "react-icons/hi2";
import SortBy from "../../ui/SortBy";
import { useSearchParams } from "react-router-dom";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { useAddTraining } from "./useAddTraining";
import ConfirmAccept from "../../ui/ConfirmAccept";

const ExTable = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const ExerciseTable = styled.div`
  width: 25%;
  margin: 0 2rem;
`;
const CreateTable = styled.div`
  width: 58%;
  margin: 0 2rem;
  display: flex;
  flex-wrap: wrap;
`;

const ActionWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

function ExcerciseTable() {
  const {
    isLoading,
    excercises,
    handleGenerate,
    isReadingExercises,
    readExercises,
  } = useExcerciseContext();
  const { addTraining, isLoading: isAdding } = useAddTraining();
  const [searchParams] = useSearchParams();

  if (isLoading || isReadingExercises) return <Spinner />;

  const diffMap = {
    easy: 3,
    medium: 4,
    hard: 5,
  };

  const diffNumber = diffMap[excercises?.[0]?.diff] || 0;

  const modifiedEx = excercises?.slice(0, diffNumber);
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

  function handleAdd(acceptedExcercises) {
    if (!acceptedExcercises) return;
    const newPlan = {
      type: "",
      exercises: [],
      totalSets: 0,
      totalReps: 0,
      totalRest: 0,
    };
    newPlan.type = modifiedEx[0]?.type;
    acceptedExcercises.map((ex) => newPlan.exercises.push(ex.name));
    newPlan.totalSets = acceptedExcercises.reduce(
      (acc, cur) => acc + cur.set,
      0
    );
    newPlan.totalReps =
      acceptedExcercises.reduce((acc, cur) => acc + cur.rep, 0) *
      newPlan.totalSets;
    newPlan.totalRest =
      (acceptedExcercises.reduce((acc, cur) => acc + cur.rest, 0) *
        newPlan.totalSets) /
      60;
    addTraining(newPlan);
  }
  return (
    <ExTable>
      <ExerciseTable>
        <Modal>
          <Heading as="h4"></Heading>
          {modifiedEx?.map((exercise) => (
            <Excercise key={exercise.id} exercise={exercise} type="dropDown" />
          ))}
          {excercises && (
            <ActionWrap>
              <Button onClick={handleGenerate}>
                <span> re-generate</span> <HiArrowPath />
              </Button>

              <Modal.Open opens="accept">
                <Button variation="success">
                  <span> Accept </span> <HiOutlineHandThumbUp />
                </Button>
              </Modal.Open>
            </ActionWrap>
          )}
          <Modal.Window name="accept">
            <ConfirmAccept
              resourceName="training"
              disabled={isAdding}
              onConfirm={() => handleAdd(modifiedEx)}
            ></ConfirmAccept>
          </Modal.Window>
        </Modal>
      </ExerciseTable>
      <CreateTable>
        <Modal>
          <ActionWrap>
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
        </Modal>

        {sortedExercise?.map((exercise) => (
          <Excercise key={exercise.id} exercise={exercise} type="pill" />
        ))}
      </CreateTable>
    </ExTable>
  );
}

export default ExcerciseTable;
