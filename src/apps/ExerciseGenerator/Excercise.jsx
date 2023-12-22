import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

import Dropdownbar from "../../ui/Dropdownbar";

function Excercise({ exercise }) {
  const { name, type, diff, set, rep, rest, favortite } = exercise;
  const { display, setDisplay } = useState(false);
  return (
    <div>
      {diff === "easy" && (
        <Dropdownbar
          size="large"
          variation="success"
          onClick={() => setDisplay((d) => !d)}
        >
          {name}
          <HiChevronDown />
        </Dropdownbar>
      )}
      {diff === "medium" && (
        <Dropdownbar size="large" variation="secondary">
          {name}
        </Dropdownbar>
      )}
      {diff === "hard" && (
        <Dropdownbar size="large" variation="danger">
          {name}
        </Dropdownbar>
      )}
      {display && <div></div>}
    </div>
  );
}

export default Excercise;
