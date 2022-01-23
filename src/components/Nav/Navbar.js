import "./Navbar.css";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <nav className="navbar">
      <ul>
        <NavLink to="/react-demo/" activeclassname="active">
          Welcome
        </NavLink>
        <NavLink to="/react-demo/element-visibility" activeclassname="active">
          Element Visibility
        </NavLink>
        <NavLink to="/react-demo/list-building" activeclassname="active">
          List Building
        </NavLink>
        <NavLink to="/react-demo/style-manipulation" activeclassname="active">
          Style Manipulation
        </NavLink>
        <NavLink to="/react-demo/chat-with-seb" activeclassname="active">
          Chat With Seb
        </NavLink>
        <NavLink to="/react-demo/resource-rally" activeclassname="active">
          Resource Rally
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
