import React from 'react';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className="header">
      <nav>
        <ul className="list">
          <li>
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/calculator">
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/quote">
              Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
