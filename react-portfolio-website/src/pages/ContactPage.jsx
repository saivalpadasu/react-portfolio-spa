import React from "react";
import "../assets/styles/contactpage_styles.css";
import backgroundImage from "../assets/images/backgrounds/ironman1.png";

const ContactPage = () => {
  return (
    <div>
      <section className="page-title bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-1 text-white font-weight-bold font-primary">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="map"> </div>
    </div>
  );
};

export default ContactPage;
