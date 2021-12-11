import React from 'react';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  <header className="header">
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>;
};

export default MainHeader;
