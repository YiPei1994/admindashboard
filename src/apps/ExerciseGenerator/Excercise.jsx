import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import Dropdownbar from "../../ui/Dropdownbar";
import styled from "styled-components";
import ExcercisePill from "./ExcercisePill";

import ButtonIcon from "../../ui/ButtonIcon";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import CreateExerciseForm from "./createExerciseForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteExercise } from "./useDeleteExercise";

import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { useCreateExcercise } from "./useCreateExercise";

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

function Excercise({ exercise, type: formtype }) {
  const { id, type, name, diff, set, rep, rest } = exercise;
  const [display, setDisplay] = useState(false);
  const { deletingExercise, isLoading } = useDeleteExercise();
  const { creatingExcercise } = useCreateExcercise();
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

  function duplicateCabin(excercise) {
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

          <HiChevronDown />
        </Dropdownbar>
      )}
      {diff && formtype === "pill" && (
        <ExcercisePill {...getPillsProps()}>
          <span>{name}</span>
          <Modal>
            <div>
              <ButtonIcon onClick={duplicateCabin}>
                <HiOutlineDocumentDuplicate />
              </ButtonIcon>
              <Modal.Open opens="edit">
                <ButtonIcon>
                  <HiOutlinePencilSquare />
                </ButtonIcon>
              </Modal.Open>
              <Modal.Open opens="delete">
                <ButtonIcon>
                  <HiOutlineXMark />
                </ButtonIcon>
              </Modal.Open>
            </div>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName={name}
                disabled={isLoading}
                onConfirm={() => deletingExercise(id)}
              />
            </Modal.Window>
            <Modal.Window name="edit">
              <CreateExerciseForm exerciseToEdit={exercise} type="modal" />
            </Modal.Window>
          </Modal>
        </ExcercisePill>
      )}

      {display && (
        <ExerciseTable>
          <span>name: {name} </span>
          <span>sets: {set} </span>
          <span>reps: {rep} </span>
          <span>resting time: {rest}s </span>
        </ExerciseTable>
      )}
    </StyledExercise>
  );
}

export default Excercise;
