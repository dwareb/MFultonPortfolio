import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-list">
        <li className="list-item">
          <NavLink className="nav-link" to="about">
            About
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="nav-link" to="previouswork">
            Previous Work
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="nav-link" to="projects">
            Projects
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="nav-link" to="contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
