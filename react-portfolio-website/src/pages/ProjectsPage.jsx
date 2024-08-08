import React from "react";
import "../assets/styles/projectspage_styles.css";
import backgroundImage from "../assets/images/backgrounds/ironman3.png";
import ironManImage from "../assets/images/iron_man.jpg";
import sherlockHolmesImage from "../assets/images/sherlock_holmes.jpg";
import endgameImage from "../assets/images/endgame.jpg";
import theJudgeImage from "../assets/images/the_judge.jpg";
import tropicThunderImage from "../assets/images/tropic_thunder.jpg";
import chaplinImage from "../assets/images/chaplin.jpg";

const ProjectsPage = () => {
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
                Robert Downey Jr. Projects
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card hover-bg-secondary shadow py-4">
                <div className="card-body text-center">
                  <div className="position-relative">
                    <img
                      src={ironManImage}
                      alt="Iron Man"
                      className="img-fluid mb-5 rounded-circle"
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4 className="mb-4">Iron Man</h4>
                  <p>
                    Iron Man (2008) - Robert Downey Jr. stars as Tony Stark, a
                    billionaire industrialist and genius inventor who becomes
                    the armored superhero Iron Man.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card hover-bg-secondary shadow py-4">
                <div className="card-body text-center">
                  <div className="position-relative">
                    <img
                      src={sherlockHolmesImage}
                      alt="Sherlock Holmes"
                      className="img-fluid mb-5 rounded-circle"
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4 className="mb-4">Sherlock Holmes</h4>
                  <p>
                    Sherlock Holmes (2009) - Downey Jr. takes on the role of the
                    legendary detective Sherlock Holmes in this action-packed
                    adaptation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card hover-bg-secondary shadow py-4">
                <div className="card-body text-center">
                  <div className="position-relative">
                    <img
                      src={endgameImage}
                      alt="Avengers: Endgame"
                      className="img-fluid mb-5 rounded-circle"
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4 className="mb-4">Avengers: Endgame</h4>
                  <p>
                    Avengers: Endgame (2019) - In this epic conclusion to the
                    Avengers saga, Downey Jr. reprises his role as Iron Man in a
                    critical battle against Thanos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card hover-bg-secondary shadow py-4">
                <div className="card-body text-center">
                  <div className="position-relative">
                    <img
                      src={theJudgeImage}
                      alt="The Judge"
                      className="img-fluid mb-5 rounded-circle"
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4 className="mb-4">The Judge</h4>
                  <p>
                    The Judge (2014) - Downey Jr. plays a successful lawyer who
                    returns to his hometown and reunites with his estranged
                    father, a judge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card hover-bg-secondary shadow py-4">
                <div className="card-body text-center">
                  <div className="position-relative">
                    <img
                      src={tropicThunderImage}
                      alt="Tropic Thunder"
                      className="img-fluid mb-5 rounded-circle"
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4 className="mb-4">Tropic Thunder</h4>
                  <p>
                    Tropic Thunder (2008) - Downey Jr. earned acclaim for his
                    role as Kirk Lazarus, a method actor who undergoes surgery
                    to darken his skin for a role in this satirical comedy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card hover-bg-secondary shadow py-4">
                <div className="card-body text-center">
                  <div className="position-relative">
                    <img
                      src={chaplinImage}
                      alt="Chaplin"
                      className="img-fluid mb-5 rounded-circle"
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4 className="mb-4">Chaplin</h4>
                  <p>
                    Chaplin (1992) - Downey Jr. portrays Charlie Chaplin in this
                    biographical film about the legendary comedian and
                    filmmaker.
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

export default ProjectsPage;
