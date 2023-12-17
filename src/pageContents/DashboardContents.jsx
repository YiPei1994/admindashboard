import styled from "styled-components";
import ToDoList from "../apps/toDos/ToDoList";

const Dashboard = styled.div`
  padding: 2rem;
`;
function DashboardContents() {
  return (
    <Dashboard>
      <ToDoList />
    </Dashboard>
  );
}

export default DashboardContents;
