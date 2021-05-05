import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className=" ui item">
        <h3 class="ui grey header">Inventory</h3>
      </Link>
      <div className="right menu">
        <Link to="/new" className="ui item">
          <h3 class="ui grey header">Add New</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
