import styled from "styled-components";
import TrainingForm from "./TrainingForm";
import { useOutdoorTraining } from "./OutdoorTrainingContext";
import { useOutdoorData } from "./useOutdoorData";
import Spinner from "../../ui/Spinner";
import DataHistory from "./DataHistory";

const HistoryWrap = styled.div`
  width: 35%;
`;
function OutdoorTrainingHistory() {
  const { display } = useOutdoorTraining();
  const { usingData, isLoading } = useOutdoorData();

  if (isLoading) return <Spinner />;

  return (
    <HistoryWrap>
      {display && <TrainingForm />}
      {usingData.map((data, i) => (
        <DataHistory key={i} data={data} />
      ))}
    </HistoryWrap>
  );
}

export default OutdoorTrainingHistory;
