// Developed by Ekaterina Strelkova
import React from "react";
import "../assets/styles/footer_styles.css";

const Footer = () => {
  return (
    <footer className="bg-secondary position-relative">
      <div className="py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-left">
              <p className="text-light mb-0">
                Iron Man | Robert Downey Jr. Copyright &copy; 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
