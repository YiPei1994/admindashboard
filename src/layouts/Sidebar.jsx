import styled from "styled-components";
import MainNav from "../ui/MainNav";
import Logo from "../ui/Logo";

const Styledsidebar = styled.div`
  grid-area: 1 / 1 / 6 / 2;
`;

function Sidebar() {
  return (
    <Styledsidebar>
      <Logo />
      <MainNav />
    </Styledsidebar>
  );
}

export default Sidebar;
