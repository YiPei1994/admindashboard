import { HiArrowPath, HiOutlineHandThumbUp } from "react-icons/hi2";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Excercise from "./Excercise";
import ConfirmAccept from "../../ui/ConfirmAccept";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useAddTraining } from "../../feature/trainingTacking/useAddTraining";
import { useExcerciseContext } from "./ExcerciseContextProvider";
import styled from "styled-components";

const ActionWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 1rem;
  margin-top: 5rem;
`;
function CreateTraining() {
  const { isLoading, excercises, handleGenerate, intensity, type } =
    useExcerciseContext();
  const { addTraining, isLoading: isAdding } = useAddTraining();

  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  let filteredType;

  // Filter by type
  if (type === "all") filteredType = excercises;
  else filteredType = excercises?.filter((ex) => ex.type === type);

  console.log(filteredType);

  // Filter by difficulty
  let filteredDiff;
  if (intensity === "mix") {
    const uniqueExerciseNames = new Set();
    filteredDiff = filteredType?.filter((ex) => {
      // Check if the exercise name is already encountered
      if (!uniqueExerciseNames.has(ex.name)) {
        // If not encountered, add it to the set and include it in the result
        uniqueExerciseNames.add(ex.name);
        return true;
      }
      // If encountered, exclude it from the result
      return false;
    });
  } else {
    filteredDiff = filteredType?.filter((ex) => ex.diff === intensity);
  }

  const diffMap = {
    easy: 3,
    medium: 4,
    hard: 5,
    mix: 4,
  };

  const diffNumber = diffMap[intensity] || 0;

  const modifiedEx = filteredDiff?.slice(0, diffNumber);
  console.log(modifiedEx);

  function handleAdd(acceptedExcercises) {
    if (!acceptedExcercises) return;
    const newPlan = {
      type: "",
      exercises: [],
      totalSets: 0,
      totalReps: 0,
      totalRest: 0,
      usedCalories: 0,
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
    newPlan.usedCalories = Math.floor(Number(newPlan.totalReps / 1.88));
    console.log(newPlan);
    addTraining(newPlan);
    navigate("/training");
  }
  return (
    <Modal>
      <div>
        {modifiedEx?.map((exercise) => (
          <Excercise key={exercise.id} exercise={exercise} type="dropDown" />
        ))}
      </div>
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
  );
}

export default CreateTraining;
