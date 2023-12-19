import React from "react";
import PaperRockScissors from "../gameApps/paper-rock-scissors/PaperRockScissors";
import styled from "styled-components";

const Wapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
function MiniGamesContents() {
  return (
    <Wapper>
      <PaperRockScissors />
    </Wapper>
  );
}

export default MiniGamesContents;
