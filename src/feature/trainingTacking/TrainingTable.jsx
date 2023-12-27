import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import TrainingRow from "./TrainingRow";
import { useTraningSession } from "./useTrainingSession";

function TrainingTable() {
  const { trainingHistory, isLoading, count } = useTraningSession();

  if (isLoading) return <Spinner />;

  return (
    <Table columns="0.6fr 0.5fr 3.4fr 1fr 1fr 1.5fr">
      <Table.Header>
        <div>Date</div>
        <div>Type</div>
        <div>Excercises</div>
        <div>Total repeats</div>
        <div>Rest time</div>
        <div>Calories burned</div>
      </Table.Header>

      <Table.Body
        data={trainingHistory}
        render={(training) => (
          <TrainingRow key={training?.id} training={training} />
        )}
      />

      {/*  <Table.Footer>
        <Pagination count={count} />
      </Table.Footer> */}
    </Table>
  );
}

export default TrainingTable;
