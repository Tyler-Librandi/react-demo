import "./Navbar.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function NavbarComponent() {
  const [navCollapsed, setNavCollapsed] = useState(true);
  const handleNavCollapsed = () => setNavCollapsed(!navCollapsed);

  return (
    <nav className="navbar navbar-expand-lg">
      <button
        className="custom-toggler navbar-toggler hamburger"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded={!navCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapsed}
      >
        <span className="navbar-toggler-icon">
          <FaBars />
        </span>
      </button>

      <div
        className={`${navCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbar"
      >
        <NavLink
          to="/react-demo/"
          activeclassname="active"
          className="nav-link"
        >
          Welcome
        </NavLink>
        <NavLink
          to="/react-demo/element-visibility"
          activeclassname="active"
          className="nav-link"
        >
          Element Visibility
        </NavLink>
        <NavLink
          to="/react-demo/list-building"
          activeclassname="active"
          className="nav-link"
        >
          List Building
        </NavLink>
        <NavLink
          to="/react-demo/style-manipulation"
          activeclassname="active"
          className="nav-link"
        >
          Style Manipulation
        </NavLink>
        <NavLink
          to="/react-demo/chat-with-seb"
          activeclassname="active"
          className="nav-link"
        >
          Chat With Seb
        </NavLink>
        <NavLink
          to="/react-demo/resource-rally"
          activeclassname="active"
          className="nav-link"
        >
          Resource Rally
        </NavLink>
      </div>
    </nav>
  );
}

export default NavbarComponent;
