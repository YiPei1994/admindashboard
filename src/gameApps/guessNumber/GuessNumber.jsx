import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "../../ui/Modal";
import Card from "../../ui/Card";
import CardHeader from "../../ui/CardHeader";
import Image from "../../ui/Image";
import CardBody from "../../ui/CardBody";
import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

const StyledGuesNumber = styled.div`
  text-align: center;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-width: 600px;
  gap: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function GuessNumber() {
  const [randomNumber, setRandomeNumber] = useState(0);
  const [lifes, setLifes] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [restart, setRestart] = useState(false);
  const [guessedNumber, setGuessedNumber] = useState(0);
  const [status, setStatus] = useState("");
  useEffect(
    function () {
      const randomeNumberGenerator = function (min, max) {
        setRandomeNumber(Number(Math.round(Math.random() * (max - min) + min)));
        setLifes(Number(max / 2));
        setGuessedNumber(0);
        setStatus("");
      };
      randomeNumberGenerator(1, 20);
    },
    [restart]
  );

  function handleCheck() {
    if (!guessedNumber) return;

    if (guessedNumber === randomNumber) {
      if (lifes > bestScore) {
        setBestScore(lifes);
      } else {
        setBestScore(bestScore);
      }
      setStatus("win");
    } else if (guessedNumber !== randomNumber) {
      if (lifes < 1) {
        setStatus("over");
        setLifes(0);
      } else {
        setLifes((life) => life - 1);
      }

      guessedNumber < randomNumber ? setStatus("low") : setStatus("high");
    }
  }

  return (
    <Modal>
      <Card>
        <CardHeader>
          <Image src="../public/games/guessNumber.jpg" />
        </CardHeader>
        <CardBody>
          <Modal.Open opens="guess">
            <Button variation="success">Play Game</Button>
          </Modal.Open>
        </CardBody>
      </Card>
      <Modal.Window name="guess">
        <StyledGuesNumber>
          <h1>Guess the number from 1 - 20</h1>
          <div>
            <Heading as="h1">{status === "win" ? randomNumber : "??"}</Heading>
          </div>
          <div>
            <Input
              type="text"
              value={guessedNumber}
              placeholder="guess a number"
              onChange={(e) => setGuessedNumber(Number(e.target.value))}
            />
            <Button variation="primary" onClick={handleCheck}>
              Check
            </Button>
          </div>
          <div>
            {status === "over" && <p>you have lost</p>}
            {status === "win" && <p>you have won</p>}
            {status === "low" && <p>Too low!</p>}
            {status === "high" && <p>Too high!</p>}
          </div>
          <div>
            <p>Lifes left:{lifes}</p>
            <p>Best scores:{bestScore} </p>
          </div>
          <Button variation="secondary" onClick={() => setRestart((r) => !r)}>
            Again
          </Button>
        </StyledGuesNumber>
      </Modal.Window>
    </Modal>
  );
}

export default GuessNumber;
