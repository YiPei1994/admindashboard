import styled from "styled-components";
import OutdoorTrainingHistory from "./OutdoorTrainingHistory";
import OutdoorTrainingMap from "./OutdoorTrainingMap";
import { OutdoorTrainingContextProvider } from "./OutdoorTrainingContext";

const OutdoorWrap = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
`;
function OutdoorTrainingTable() {
  return (
    <OutdoorTrainingContextProvider>
      <OutdoorWrap>
        <OutdoorTrainingHistory />
        <OutdoorTrainingMap />
      </OutdoorWrap>
    </OutdoorTrainingContextProvider>
  );
}

export default OutdoorTrainingTable;
