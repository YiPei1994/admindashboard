import { Link } from "react-router-dom";
import styled from "styled-components";
/* import { useDarkModeContext } from "../features/contexts/DarkModeContext"; */

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  /* const { isDarkMode } = useDarkModeContext(); */
  return (
    <StyledLogo>
      <Link to="/dashboard">
        <Img src="/logo-light.png" alt="Logo" />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
