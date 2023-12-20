import GuessNumber from "../gameApps/guessNumber/GuessNumber";
import PaperRockScissors from "../gameApps/paper-rock-scissors/PaperRockScissors";
import styled from "styled-components";

const Wapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const Child = styled.div`
  width: 30%;
  margin: 1rem;
`;
function MiniGamesContents() {
  return (
    <Wapper>
      <Child>
        {" "}
        <PaperRockScissors />
      </Child>
      <Child>
        {" "}
        <GuessNumber />
      </Child>
    </Wapper>
  );
}

export default MiniGamesContents;
