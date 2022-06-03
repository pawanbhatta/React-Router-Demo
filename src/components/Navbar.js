import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink style={{ margin: "10px" }} to="/">
        Home
      </NavLink>
      <NavLink style={{ margin: "10px" }} to="/about">
        About
      </NavLink>
      <NavLink style={{ margin: "10px" }} to="/products">
        Products
      </NavLink>
      <NavLink style={{ margin: "10px" }} to="/users">
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;
