import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav id="nav">
    <div className="nav-group-left">
      <NavLink exact className="home-nav-link" to="/">AUBREY WEST</NavLink>
    </div>
    <div className="nav-group-right">
      <NavLink activeClassName="active-nav-link" to="/resume">RESUME</NavLink>
      <NavLink activeClassName="active-nav-link" to="/portfolio">PORTFOLIO</NavLink>
      <NavLink activeClassName="active-nav-link" to="/contact">CONTACT</NavLink>
    </div>
  </nav>
);

export default Nav;
