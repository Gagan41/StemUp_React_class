import React from "react";
import { NavLink } from "react-router-dom";

function NavLink1() {
  return (
    <div>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "blue",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        About
      </NavLink>
    </div>
  );
}

export default NavLink1;
