import styled from "styled-components";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import { useExcerciseContext } from "./ExcerciseContextProvider";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiChevronDoubleRight } from "react-icons/hi2";

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 2rem auto;
`;

const OptionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
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
      <OptionGroup>
        <p>{type} </p>
        <ButtonIcon>
          <HiChevronDoubleRight />
        </ButtonIcon>
      </OptionGroup>
      <OptionGroup>
        <Heading as="h3">How intese are you feeling?</Heading>
        <ButtonGroup>
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
      <OptionGroup>
        <p>{intensity} </p>
        <ButtonIcon>
          <HiChevronDoubleRight />
        </ButtonIcon>
      </OptionGroup>
      <OptionGroup>
        <Button size="large" onClick={handleGenerate}>
          Generate
        </Button>
      </OptionGroup>
    </OptionWrapper>
  );
}

export default ExcerciseOptions;
