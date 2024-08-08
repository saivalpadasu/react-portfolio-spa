// Developed by Ekaterina Strelkova
import React, { useEffect } from "react";
import "../assets/styles/style.css";
import "../assets/styles/navbar_styles.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.querySelector(".navigation").classList.add("nav-bg");
      } else {
        document.querySelector(".navigation").classList.remove("nav-bg");
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="navigation fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <NavLink to="/" className="nav-brand text-white display-4">
          Robert Downey Jr.
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-center" id="navigation">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
