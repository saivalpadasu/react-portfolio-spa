// developed by Ekaterina Strelkova
import React from "react";
import "../assets/styles/homepage_styles.css";
import bannerImage from "../assets/images/banner/banner2.jpg";
import homeImage from "../assets/images/downey.jpg";
import { FaStar, FaTrophy, FaHeart } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div>
    <section
        className="banner bg-cover position-relative d-flex justify-content-center align-items-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img src={homeImage} alt="Home" className="img-fluid my-5" />
              <h1 className="display-2 text-white font-weight-bold font-primary">
                Robert Downey Jr.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <h2 className="section-title display-4">Robert Downey Jr. Highlights</h2>
              <h3 className="lead py-3">
                Discover some of the most remarkable achievements and moments from Robert Downey Jr.'s illustrious career:
              </h3>
              <div className="section-border"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card hover-bg-secondary shadow py-4">
                <div className="card-body text-center">
                  <div className="position-relative">
                    <FaStar className="icon-lg icon-box mb-5 d-inline-block text-primary" />
                  </div>
                  <h4 className="mb-4">Career Revival</h4>
                  <p>
                    After overcoming personal struggles, Robert Downey Jr. made a spectacular comeback with his iconic role as Tony Stark in the Marvel Cinematic Universe.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card hover-bg-secondary shadow py-4">
                <div className="card-body text-center">
                  <div className="position-relative">
                    <FaTrophy className="icon-lg icon-box mb-5 d-inline-block text-warning" />
                  </div>
                  <h4 className="mb-4">Box Office Success</h4>
                  <p>
                    As of 2024, Robert Downey Jr. is one of the highest-grossing actors of all time, with his films collectively earning over $14 billion worldwide.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card hover-bg-secondary shadow py-4">
                <div className="card-body text-center">
                  <div className="position-relative">
                    <FaHeart className="icon-lg icon-box mb-5 d-inline-block text-danger" />
                  </div>
                  <h4 className="mb-4">Philanthropy</h4>
                  <p>
                    Outside of acting, Robert Downey Jr. is known for his philanthropic efforts, supporting various causes including environmental conservation and children's charities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
