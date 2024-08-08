import React from "react";
import "../assets/styles/aboutpage_styles.css";
import backgroundImage from "../assets/images/backgrounds/ironman3.png";
import ironman from "../assets/images/iron_man.jpg";

const AboutPage = () => {
  return (
    <div>
      <section
        className="page-title bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-1 text-white font-weight-bold font-primary">
                About Me
              </h1>
            </div>
          </div>
        </div>
      </section>
      (
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">About Robert Downey Jr.</span>
                  <h2>A Journey of Talent, Transformation, and Triumph</h2>
                </div>
                <div className="text">
                  I am Robert Downey Jr., an actor whose career spans over four
                  decades in Hollywood. From my early days in films to becoming
                  a global icon with roles like Iron Man, my journey has been
                  one of incredible highs and profound growth, both on and off
                  the screen.
                </div>
                <div className="text">
                  I’m passionate about telling stories that resonate with
                  audiences worldwide. Whether it's through the lens of a
                  superhero, a detective, or a troubled soul, my work is
                  dedicated to bringing characters to life in a way that
                  connects with people deeply.
                </div>
                <div className="btn-box">
                  <a href="/contact" className="theme-btn btn-style-one">
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="author-desc">
                  <h2>Robert Downey Jr.</h2>
                  <span>Actor & Philanthropist</span>
                </div>
                <figure className="image-1">
                  <a href="/" className="lightbox-image" data-fancybox="images">
                    <img
                      title="Robert Downey Jr."
                      src={ironman}
                      alt="Robert Downey Jr."
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
