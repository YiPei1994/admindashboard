import Table from "../../ui/Table";

function TrainingRow({ training }) {
  const {
    id,
    created_at,
    exercises,
    totalReps,
    totalRest,
    type,
    usedCalories,
  } = training;

  const formatedDate = String(created_at)
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");

  return (
    <Table.Row>
      <span>{formatedDate} </span>
      <span>{type} </span>
      <span>{exercises.join(" ,")} </span>
      <span>{totalReps} reps</span>
      <span>{totalRest} mins</span>
      <span>appx. {usedCalories} calories burned </span>
    </Table.Row>
  );
}

export default TrainingRow;
