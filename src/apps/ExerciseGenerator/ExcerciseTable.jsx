import styled from "styled-components";
import ExerciseOperations from "./ExerciseOperations";
import CreateTraining from "./CreateTraining";

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

function ExcerciseTable() {
  return (
    <ExTable>
      <ExerciseTable>
        <CreateTraining />
      </ExerciseTable>
      <CreateTable>
        <ExerciseOperations />
      </CreateTable>
    </ExTable>
  );
}

export default ExcerciseTable;
