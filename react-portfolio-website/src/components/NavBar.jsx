import React from "react";
import "../assets/styles/navbar_styles.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>This is the Navigation Bar</h1>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
