import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { LuSunMedium, LuMoon } from "react-icons/lu";

const Navbar = () => {
  const { theme, toggleTheme } = useAppContext();
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink to="/" className="logo">
            T
          </NavLink>
          <div className="navLink">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/talents">Browse Talent</NavLink>
            <NavLink to="/jobs">Find Jobs</NavLink>
            <NavLink to="/feed">Live Feed</NavLink>
          </div>
          <div className="navLink">
            <NavLink to="/signin">Login</NavLink>
            <NavLink to="/signup" className="signup">
              Sign Up
            </NavLink>
            <button onClick={() => toggleTheme()}>
              {theme === "light" ? <LuMoon /> : <LuSunMedium />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
