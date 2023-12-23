import styled from "styled-components";
import { useExcerciseContext } from "./ExcerciseContextProvider";
import Spinner from "../../ui/Spinner";
import Excercise from "./Excercise";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

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
  const { handleGenerate } = useExcerciseContext();

  if (isLoading) return <Spinner />;

  /*   console.log(excercises.slice(0, 3)); */
  let diffNumber;
  if (excercises?.[0].diff === "easy") {
    diffNumber = 3;
  } else if (excercises?.[0].diff === "medium") {
    diffNumber = 4;
  }
  const modifiedEx =
    excercises &&
    Object.entries(excercises)
      .slice(0, diffNumber)
      .map((entry) => entry[1]);

  return (
    <ExTable>
      <ExerciseTable>
        <Heading as="h4"></Heading>
        {modifiedEx?.map((exercise) => (
          <Excercise key={exercise.id} exercise={exercise} />
        ))}
        <Button onClick={handleGenerate}>regenerate exercises</Button>
      </ExerciseTable>
      <HistoryTable></HistoryTable>
    </ExTable>
  );
}

export default ExcerciseTable;
