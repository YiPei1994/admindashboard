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

  gap: 1rem;
  & div {
    width: 50%;
  }
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

  return (
    <Chartwrapper>
      <div>
        <Heading as="h3">Indoor training</Heading>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            data={updatedTrainingHistory}
            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
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
              dataKey="totalReps"
              type="monotone"
              stroke="#de6c3f"
              fill="#d8bd62"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div>
        <Heading as="h3">Outdoor workouts</Heading>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            data={updatedWorkoutHistory}
            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
          >
            {" "}
            <XAxis dataKey="label" />
            <YAxis unit=" Cal" />
            <CartesianGrid strokeDasharray="4" />
            <Tooltip />
            <Area
              dataKey="calories"
              type="monotone"
              stroke="#C2410C"
              fill="#FCD34D"
            />
            <Area
              dataKey="duration"
              type="monotone"
              stroke="#de6c3f"
              fill="#d8bd62"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Chartwrapper>
  );
}

export default CaloriesChart;
