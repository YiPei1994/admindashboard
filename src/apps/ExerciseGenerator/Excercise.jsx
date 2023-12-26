import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import Dropdownbar from "../../ui/Dropdownbar";
import styled from "styled-components";
import ExcercisePill from "./ExcercisePill";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import CreateExerciseForm from "./createExerciseForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteExercise } from "./useDeleteExercise";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { useCreateExcercise } from "./useCreateExercise";
import Menus from "../../ui/Menus";
import { useCurrentUser } from "../../feature/authentication/useCurrentUser";

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
    font-size: 1.6rem;
  }
`;

function Excercise({ exercise, type: formtype }) {
  const { id: exerciseId, type, name, diff, set, rep, rest } = exercise;
  const [display, setDisplay] = useState(false);
  const { deletingExercise, isLoading } = useDeleteExercise();
  const { creatingExcercise } = useCreateExcercise();
  const { isAuthenticated } = useCurrentUser();
  const handleDisplay = () => {
    setDisplay((d) => !d);
  };

  const getDropdownbarProps = () => {
    let variation = "success";

    if (diff === "medium") {
      variation = "primary";
    } else if (diff === "hard") {
      variation = "danger";
    }

    return { size: "large", variation, onClick: handleDisplay };
  };

  const getPillsProps = () => {
    let variation = "success";

    if (diff === "medium") {
      variation = "primary";
    } else if (diff === "hard") {
      variation = "danger";
    }

    return { size: "large", variation };
  };

  function duplicateCabin() {
    creatingExcercise({
      name: `Copy of ${name}`,
      type,
      diff,
      set,
      rep,
      rest,
    });
  }

  return (
    <StyledExercise>
      {diff && formtype === "dropDown" && (
        <Dropdownbar {...getDropdownbarProps()}>
          <span>{name}</span>

          {!display ? <HiChevronDown /> : <HiChevronUp />}
        </Dropdownbar>
      )}
      {diff && formtype === "pill" && (
        <ExcercisePill {...getPillsProps()}>
          <span>{name}</span>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={exerciseId} />
              <Menus.List id={exerciseId}>
                <Menus.Button
                  icon={<HiOutlineDocumentDuplicate />}
                  onClick={duplicateCabin}
                >
                  Duplicate
                </Menus.Button>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiOutlinePencilSquare />}>
                    Edit
                  </Menus.Button>
                </Modal.Open>
                <Modal.Open opens="delete">
                  <Menus.Button
                    icon={<HiOutlineXMark />}
                    disabled={isAuthenticated}
                  >
                    Delete
                  </Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName={name}
                  disabled={isLoading || !isAuthenticated}
                  onConfirm={() => deletingExercise(exerciseId)}
                />
              </Modal.Window>
              <Modal.Window name="edit">
                <CreateExerciseForm exerciseToEdit={exercise} type="modal" />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </ExcercisePill>
      )}

      {display && (
        <ExerciseTable>
          <span>sets: {set} </span>
          <span>reps: {rep} </span>
          <span>resting time: {rest}s </span>
        </ExerciseTable>
      )}
    </StyledExercise>
  );
}

export default Excercise;
