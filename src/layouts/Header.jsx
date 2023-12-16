import styled from "styled-components";
import HeaderContents from "../pageContents/HeaderContents";

const StyledHeader = styled.div`
  grid-area: 1 / 2 / 2 / 6;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderContents />
    </StyledHeader>
  );
}

export default Header;
