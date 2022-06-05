import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar = () => {
  const auth = useAuth();
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
      <NavLink style={{ margin: "10px" }} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={{ margin: "10px" }} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
