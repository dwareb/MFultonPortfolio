import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import icon from "../images/mflogolight.png";

const Navbar = () => {
  const [expand, setExpand] = useState(false)

  const handleExpand = () => setExpand(!expand)
  const closeMenu = () => setExpand(false)

  return (
    <nav className="navbar nav-bar">
      <img src={icon} height="50" className={(expand ? "active " : "") + "mobile-logo"} alt="Mike Fulton Logo" title="Logo" onClick={handleExpand}/>
      <img src={icon} height="50" className="nav-logo" alt="Mike Fulton Logo" title="Logo"/>
      <ul className={(expand ? "active " : "") + "nav-menu navbar-nav mr-auto"}>
        <li className="list-item">
          <NavLink className="nav-link" to="/" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="nav-link" to="previouswork" onClick={closeMenu}>
            Previous Work
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="nav-link" to="projects" onClick={closeMenu}>
            Projects
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="nav-link" to="contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
