import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTraningSession } from "../../feature/trainingTacking/useTrainingSession";

import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useOutdoorData } from "../outdoorTraining/useOutdoorData";

const Chartwrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: var(--border-radius-md);
  margin: 1rem auto;
  padding: 2rem;
  flex-direction: column;
  gap: 1rem;
`;
function CaloriesChart() {
  const { trainingHistory, isLoading } = useTraningSession();
  const { usingData, isLoading: loadingData } = useOutdoorData();
  if (isLoading || loadingData) return <Spinner />;

  const updatedTrainingHistory = trainingHistory.map((training) => {
    const formattedDate = String(training.created_at)
      .slice(5, 10)
      .split("-")
      .reverse()
      .join(".");

    return {
      ...training,
      label: Number(formattedDate),
    };
  });

  const updatedWorkoutHistory = usingData.map((workout) => {
    const formattedDate = String(workout.created_at)
      .slice(5, 10)
      .split("-")
      .reverse()
      .join(".");

    return {
      ...workout,
      label: Number(formattedDate),
    };
  });
  const combined = [...updatedTrainingHistory, ...updatedWorkoutHistory];
  console.log(combined);
  return (
    <Chartwrapper>
      <Heading as="h3">Burned calories</Heading>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={combined}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {" "}
          <XAxis dataKey="label" />
          <YAxis unit=" Cal" />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip />
          <Area
            dataKey="usedCalories"
            type="monotone"
            stroke="#C2410C"
            fill="#FCD34D"
          />
          <Area
            dataKey="calories"
            type="monotone"
            stroke="#de6c3f"
            fill="#d8bd62"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Chartwrapper>
  );
}

export default CaloriesChart;
