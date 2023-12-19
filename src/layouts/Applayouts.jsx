import { Outlet } from "react-router-dom";
import Header from "./Header";

import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledApplayouts = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  grid-area: 2 / 2 / 6 / 6;
  overflow-y: auto;
  margin: 2rem 3rem;
  border-radius: 2rem;
  background-color: var(--color-container);
  padding: 2rem;
`;
function Applayouts() {
  return (
    <StyledApplayouts>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledApplayouts>
  );
}

export default Applayouts;
