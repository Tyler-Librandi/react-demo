import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/react-demo/" activeClassName="active">
        Welcome
      </NavLink>
      <NavLink to="/react-demo/element-visibility" activeClassName="active">
        Element Visibility
      </NavLink>
      <NavLink to="/react-demo/list-building" activeClassName="active">
        List Building
      </NavLink>
      <NavLink to="/react-demo/style-manipulation" activeClassName="active">
        Style Manipulation
      </NavLink>
      <NavLink to="/react-demo/chat-with-seb" activeClassName="active">
        Chat With Seb
      </NavLink>
    </nav>
  );
}

export default Navbar;
