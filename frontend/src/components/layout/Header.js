import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const handClick = (e) => {
    e.preventDefault();
  };
  return (
    <header className="flex justify-center gap-x-5 my-10">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/create"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Create
      </NavLink>
      <NavLink
        to="/edit"
        className={({ isActive }) =>
          isActive ? "text-primary" : "cursor-wait"
        }
        onClick={handClick}
      >
        Edit
      </NavLink>
    </header>
  );
};

export default Header;
