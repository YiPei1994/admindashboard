import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
function MainNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="dashboard">
            <HiOutlineHome />
            <span>Dashboard</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
