import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/candidme" className="nav-link" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/play" className="nav-link" activeclassname="active">
            Play
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/inbox" className="nav-link" activeclassname="active">
            Inbox
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

