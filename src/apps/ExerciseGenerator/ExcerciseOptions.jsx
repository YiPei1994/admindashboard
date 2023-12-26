import styled from "styled-components";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import { useExcerciseContext } from "./ExcerciseContextProvider";

import { HiChevronDoubleRight } from "react-icons/hi2";

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 3rem auto 5rem auto;
`;

const OptionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  width: auto;
  width: 35%;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
function ExcerciseOptions() {
  const { type, chooseType, intensity, chooseIntensity, handleGenerate } =
    useExcerciseContext();
  return (
    <OptionWrapper>
      <OptionGroup>
        <Heading as="h3">What muscle group to train today?</Heading>
        <ButtonGroup>
          <Button onClick={chooseType} value="all">
            All
          </Button>
          <Button onClick={chooseType} value="chest">
            Chest
          </Button>
          <Button onClick={chooseType} value="back">
            Back
          </Button>
          <Button onClick={chooseType} value="legs">
            Legs
          </Button>
        </ButtonGroup>
      </OptionGroup>
      <div>
        <p>{type} </p>

        <HiChevronDoubleRight />
      </div>

      <OptionGroup>
        <Heading as="h3">How intese are you feeling?</Heading>
        <ButtonGroup>
          <Button onClick={chooseIntensity} value="mix">
            Mix
          </Button>
          <Button onClick={chooseIntensity} value="easy">
            Easy
          </Button>
          <Button onClick={chooseIntensity} value="medium">
            Medium
          </Button>
          <Button onClick={chooseIntensity} value="hard">
            Hard
          </Button>
        </ButtonGroup>
      </OptionGroup>
      <div>
        <p>{intensity} </p>

        <HiChevronDoubleRight />
      </div>
      <Button size="large" onClick={handleGenerate}>
        Generate
      </Button>
    </OptionWrapper>
  );
}

export default ExcerciseOptions;
