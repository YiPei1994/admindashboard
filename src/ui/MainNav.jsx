import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdVideogameAsset } from "react-icons/md";
import { MdOutlineAccessibility } from "react-icons/md";

import {
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineUsers,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.2s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-text);
    color: var(--color-bg);
    border-radius: 1rem;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;

    transition: all 0.2s;
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/fitness">
            <MdOutlineAccessibility />
            <span>Fitness</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/training">
            <HiOutlineUsers />
            <span>Training Session</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/games">
            <MdVideogameAsset />
            <span>MiniGames</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/user">
            <HiOutlineCog6Tooth /> <span>User Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
