import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => setExpand(!expand);
  const closeMenu = () => setExpand(false);

  return (
    <nav className="navbar nav-bar base">
      <img
        src={process.env.PUBLIC_URL + '/images/mflogolight.png'}
        height="50"
        className={(expand ? 'active ' : '') + 'mobile-logo'}
        alt="Mike Fulton Logo"
        title="Logo"
        onClick={handleExpand}
      />
      <img
        src={process.env.PUBLIC_URL + '/images/mflogolight.png'}
        height="50"
        className="nav-logo"
        alt="Mike Fulton Logo"
        title="Logo"
      />
      <ul className={(expand ? 'active ' : '') + 'nav-menu navbar-nav mr-auto'}>
        <li className="list-item">
          <NavLink
            className="nav-link"
            to="/MFultonPortfolio/"
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink
            className="nav-link"
            to="/MFultonPortfolio/previouswork"
            onClick={closeMenu}
          >
            Previous Work / Resume
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink
            className="nav-link"
            to="/MFultonPortfolio/projects"
            onClick={closeMenu}
          >
            Projects
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink
            className="nav-link"
            to="/MFultonPortfolio/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
