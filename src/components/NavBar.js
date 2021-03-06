//Header component for navigation

import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="ui two item menu">
      <NavLink to="/" exact className="ui item" activeClassName="active">
        <h3 className="ui grey header">Inventory</h3>
      </NavLink>

      <NavLink to="/new" className="ui item">
        <h3 className="ui grey header">Add New Item to Inventory</h3>
      </NavLink>
    </div>
  );
};

export default NavBar;
