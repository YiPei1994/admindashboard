import styled from "styled-components";
import ExerciseOperations from "./ExerciseOperations";
import CreateTraining from "./CreateTraining";
import Menus from "../../ui/Menus";

const ExTable = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const ExerciseTable = styled.div`
  width: 25%;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
        <Menus>
          <ExerciseOperations />
        </Menus>
      </CreateTable>
    </ExTable>
  );
}

export default ExcerciseTable;
