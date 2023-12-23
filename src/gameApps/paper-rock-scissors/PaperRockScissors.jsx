import { useState } from "react";
import { randomInt } from "../../helpers/randomInt";
import styled from "styled-components";
import Card from "../../ui/Card";
import CardHeader from "../../ui/CardHeader";
import CardBody from "../../ui/CardBody";
import Image from "../../ui/Image";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-width: 600px;
`;
const Result = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
const ScoreWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Score = styled.p`
  font-size: 36px;
  margin: 0;
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Restart = styled.button`
  margin-top: 20px;
  background-color: #2ecc71;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  margin-bottom: 3rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #27ae60;
  }
`;

function PaperRockScissors() {
  const [result, setResult] = useState("");
  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);

  function play(e) {
    const playerDecision = Number(e.target.value);
    const computerDecision = randomInt(1, 3);

    let roundResult = "draw";

    switch (true) {
      case playerDecision === computerDecision:
        break;
      case (playerDecision === 1 && computerDecision === 2) ||
        (playerDecision === 2 && computerDecision === 3) ||
        (playerDecision === 3 && computerDecision === 1):
        setComputerPoints((p) => p + 1);
        roundResult = "computer wins";
        break;
      default:
        setPlayerPoints((p) => p + 1);
        roundResult = "player wins";
        break;
    }
    setResult(roundResult);
  }

  function restart() {
    setResult("");
    setPlayerPoints(0);
    setComputerPoints(0);
  }
  return (
    <Modal>
      <Card>
        <CardHeader>
          <Image src="../public/games/rock-paper-scissor.png" />
        </CardHeader>
        <CardBody>
          <Modal.Open opens="open">
            <Button variation="success">Play Game</Button>
          </Modal.Open>
        </CardBody>
      </Card>
      <Modal.Window name="open">
        <Container>
          <Restart onClick={restart}>Restart</Restart>
          <Result>{result} </Result>
          <ScoreWrap>
            <Score>{playerPoints} </Score>
            <Score>{computerPoints} </Score>
          </ScoreWrap>

          <ButtonWrap>
            <Button onClick={play} value={1}>
              Paper
            </Button>
            <Button onClick={play} value={2}>
              Scissor
            </Button>
            <Button onClick={play} value={3}>
              Rock
            </Button>
          </ButtonWrap>
        </Container>
      </Modal.Window>
    </Modal>
  );
}

export default PaperRockScissors;
