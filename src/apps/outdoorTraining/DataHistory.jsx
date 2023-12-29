import styled from "styled-components";
import { useOutdoorTraining } from "./OutdoorTrainingContext";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiXMark } from "react-icons/hi2";
import { useDeleteWorkout } from "./useDeleteWorkout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const History = styled.button`
  display: flex;
  justify-content: space-between;

  padding: 1rem 1.2rem;
  background-color: white;
  border-radius: var(--border-radius-sm);
  margin: 0.5rem 0;
  flex-wrap: wrap;
  width: 100%;
`;

const P = styled.p`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  align-items: center;
`;

function DataHistory({ data }) {
  const { setMapPosition } = useOutdoorTraining();
  const { deletingWorkout } = useDeleteWorkout();
  const {
    id,
    created_at,
    type,
    distance,
    duration,
    cadance,
    calories,
    lat,
    lng,
  } = data;
  const formatedDate = String(created_at)
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");

  const formattedType = type.slice(0, 1).toUpperCase() + type.slice(1);

  function handleClick() {
    const position = [Number(lat), Number(lng)];

    setMapPosition(position);
  }
  return (
    <Modal>
      <History onClick={handleClick}>
        <P>
          <P>
            <span> {formattedType}</span>
            <span> {formatedDate}</span>
          </P>
          <Modal.Open opens="delete">
            <ButtonIcon>
              <HiXMark />
            </ButtonIcon>
          </Modal.Open>
        </P>
        <P>
          <span>
            {type === "cycling" && "🚴"}
            {type === "running" && "🏃"} {distance} KM
          </span>
          <span>
            {"⌛"} {duration} MIN
          </span>
          <span>
            {"⚡"} {cadance} {type === "running" && "STEP/MIN"}
            {type === "cycling" && "METR/MIN"}
          </span>
          <span>
            {"🔥"}
            {calories} CAL
          </span>
        </P>
      </History>
      <Modal.Window name="delete">
        <ConfirmDelete
          onConfirm={() => deletingWorkout(id)}
          resourceName="workout"
        />
      </Modal.Window>
    </Modal>
  );
}

export default DataHistory;
