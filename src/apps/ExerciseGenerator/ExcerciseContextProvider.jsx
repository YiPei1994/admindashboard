import { createContext, useContext, useState } from "react";
import { useGenerateExcercise } from "./useGenerateExercise";
import { useReadExercise } from "./useReadExcercise";

const ExcerciseContext = createContext();

function ExcerciseContextProvider({ children }) {
  const [type, setType] = useState("");
  const [intensity, setIntensity] = useState("");
  const { generatingExcercise, isLoading, excercises } = useGenerateExcercise();
  const { isLoading: isReadingExercises, readExercises } = useReadExercise();

  function chooseType(e) {
    const pickedType = e.target.value;

    setType(pickedType);
  }

  function chooseIntensity(e) {
    const pickedIntensity = e.target.value;

    setIntensity(pickedIntensity);
  }

  function handleGenerate() {
    if (!type || !intensity) return;
    generatingExcercise();
  }

  return (
    <ExcerciseContext.Provider
      value={{
        type,
        chooseType,
        intensity,
        chooseIntensity,
        handleGenerate,
        isLoading,
        excercises,
        readExercises,

        isReadingExercises,
      }}
    >
      {children}
    </ExcerciseContext.Provider>
  );
}

function useExcerciseContext() {
  const context = useContext(ExcerciseContext);
  if (context === undefined) {
    throw new Error("ExerciseContext was used outside ExerciseContextProvider");
  }
  return context;
}

export { useExcerciseContext, ExcerciseContextProvider };
