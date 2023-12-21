import { ExcerciseContextProvider } from "./ExcerciseContextProvider";
import ExcerciseOptions from "./ExcerciseOptions";
import ExcerciseTable from "./ExcerciseTable";

function ExcerciseGenerator() {
  return (
    <>
      <ExcerciseContextProvider>
        {" "}
        <ExcerciseOptions />
        <ExcerciseTable />
      </ExcerciseContextProvider>
    </>
  );
}

export default ExcerciseGenerator;
