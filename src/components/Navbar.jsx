//Navigation Bar. Shrinks when window gets small.
//Doesn't change pages, just uses the location and setLocation
//state variables to update which page is rendered.

import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ location, setLocation }) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => setExpand(!expand);
  const closeMenu = () => setExpand(false);

  return (
    <nav className="navbar nav-bar base">
      <button
        className={(expand ? 'active ' : '') + 'hamburger'}
        onClick={handleExpand}
      >
        🍔
      </button>
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
          <button
            className={(location === 'about' ? 'active ' : '') + 'nav-link'}
            onClick={() => {
              setLocation('about');
              closeMenu();
            }}
          >
            About
          </button>
        </li>
        <li className="list-item">
          <button
            className={
              (location === 'previouswork' ? 'active ' : '') + 'nav-link'
            }
            onClick={() => {
              setLocation('previouswork');
              closeMenu();
            }}
          >
            Previous Work / Resume
          </button>
        </li>
        <li className="list-item">
          <button
            className={(location === 'projects' ? 'active ' : '') + 'nav-link'}
            onClick={() => {
              setLocation('projects');
              closeMenu();
            }}
          >
            Projects
          </button>
        </li>
        <li className="list-item">
          <button
            className={(location === 'contact' ? 'active ' : '') + 'nav-link'}
            onClick={() => {
              setLocation('contact');
              closeMenu();
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
