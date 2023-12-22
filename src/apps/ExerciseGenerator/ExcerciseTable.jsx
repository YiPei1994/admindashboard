import styled from "styled-components";
import { useExcerciseContext } from "./ExcerciseContextProvider";
import Spinner from "../../ui/Spinner";
import Excercise from "./Excercise";
import Heading from "../../ui/Heading";

const ExTable = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;
const ExerciseTable = styled.div`
  flex: 48%;
`;
const HistoryTable = styled.div`
  flex: 48%;
`;
function ExcerciseTable() {
  const { isLoading, excercises } = useExcerciseContext();
  if (isLoading) return <Spinner />;
  console.log(excercises);
  return (
    <ExTable>
      <ExerciseTable>
        <Heading as="h4"></Heading>
        {excercises?.map((exercise) => (
          <Excercise key={exercise.id} exercise={exercise} />
        ))}
      </ExerciseTable>
      <HistoryTable></HistoryTable>
    </ExTable>
  );
}

export default ExcerciseTable;
