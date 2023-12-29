import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

const OutdoorTrainingContext = createContext();

function OutdoorTrainingContextProvider({ children }) {
  const [mapPosition, setMapPosition] = useState([]);
  const [display, setDisplay] = useState(false);
  const [searchParams] = useSearchParams();
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));

  return (
    <OutdoorTrainingContext.Provider
      value={{ display, setDisplay, lat, lng, mapPosition, setMapPosition }}
    >
      {children}
    </OutdoorTrainingContext.Provider>
  );
}

function useOutdoorTraining() {
  const context = useContext(OutdoorTrainingContext);

  if (context === undefined) {
    throw new Error("OutdoorTraningContext was used outside of its provider");
  }
  return context;
}

export { useOutdoorTraining, OutdoorTrainingContextProvider };
