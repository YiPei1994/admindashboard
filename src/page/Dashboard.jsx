import CaloriesChart from "../apps/caloriesChart/CaloriesChart";
import ToDoList from "../apps/toDos/ToDoList";
function Dashboard() {
  return (
    <>
      <div>
        <ToDoList />
      </div>
      <div>
        {" "}
        <CaloriesChart />
      </div>
    </>
  );
}

export default Dashboard;
