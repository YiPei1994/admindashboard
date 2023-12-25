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
  const { isLoading, excercises, handleGenerate } = useExcerciseContext();
  const { addTraining, isLoading: isAdding } = useAddTraining();

  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const diffMap = {
    easy: 3,
    medium: 4,
    hard: 5,
  };

  const diffNumber = diffMap[excercises?.[0]?.diff] || 0;

  const modifiedEx = excercises?.slice(0, diffNumber);

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
