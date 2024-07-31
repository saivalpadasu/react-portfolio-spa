import React from "react";
import "../assets/styles/aboutpage_styles.css";
import backgroundImage from "../assets/images/backgrounds/ironman3.png";

const AboutPage = () => {
  return (
    <div>
      <section className="page-title bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-1 text-white font-weight-bold font-primary">About Page</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <h2>Title</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
              <div className="section-border"></div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-3 col-sm-6">
              <div className="card hover-shadow">
                <div className="card-body text-center position-relative zindex-1">
                  <h4><a className="text-dark" href="team-single.html">text</a></h4>
                  <i>text</i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card hover-shadow">
                <div className="card-body text-center position-relative zindex-1">
                  <h4><a className="text-dark" href="team-single.html">text</a></h4>
                  <i>text</i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card hover-shadow">
                <div className="card-body text-center position-relative zindex-1">
                  <h4><a className="text-dark" href="team-single.html">text</a></h4>
                  <i>text</i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card hover-shadow">
                <div className="card-body text-center">
                  <h4>text </h4>
                  <i>text</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
