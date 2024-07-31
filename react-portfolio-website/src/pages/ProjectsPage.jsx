import React from "react";
import "../assets/styles/projectspage_styles.css";
import backgroundImage from "../assets/images/backgrounds/ironman3.png";

const ProjectsPage = () => {
  return (
    <div>
      <section className="page-title bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-1 text-white font-weight-bold font-primary">Projects</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="card hover-bg-secondary shadow py-4">
                <div class="card-body text-center">
                  <div class="position-relative">
                    <i class="icon-lg icon-box bg-gradient-primary rounded-circle ti-palette mb-5 d-inline-block text-white"></i>
                    <i class="icon-lg icon-watermark text-white ti-palette"></i>
                  </div>
                  <h4 class="mb-4">Design</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="card hover-bg-secondary shadow py-4">
                <div class="card-body text-center">
                  <div class="position-relative">
                    <i class="icon-lg icon-box bg-gradient-primary rounded-circle ti-dashboard mb-5 d-inline-block text-white"></i>
                    <i class="icon-lg icon-watermark text-white ti-dashboard"></i>
                  </div>
                  <h4 class="mb-4">Development</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="card hover-bg-secondary shadow py-4">
                <div class="card-body text-center">
                  <div class="position-relative">
                    <i class="icon-lg icon-box bg-gradient-primary rounded-circle ti-announcement mb-5 d-inline-block text-white"></i>
                    <i class="icon-lg icon-watermark text-white ti-announcement"></i>
                  </div>
                  <h4 class="mb-4">Marketing</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="card hover-bg-secondary shadow py-4">
                <div class="card-body text-center">
                  <div class="position-relative">
                    <i class="icon-lg icon-box bg-gradient-primary rounded-circle ti-game mb-5 d-inline-block text-white"></i>
                    <i class="icon-lg icon-watermark text-white ti-game"></i>
                  </div>
                  <h4 class="mb-4">Apps</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="card hover-bg-secondary shadow py-4">
                <div class="card-body text-center">
                  <div class="position-relative">
                    <i class="icon-lg icon-box bg-gradient-primary rounded-circle ti-crown mb-5 d-inline-block text-white"></i>
                    <i class="icon-lg icon-watermark text-white ti-crown"></i>
                  </div>
                  <h4 class="mb-4">Branding</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="card hover-bg-secondary shadow py-4">
                <div class="card-body text-center">
                  <div class="position-relative">
                    <i class="icon-lg icon-box bg-gradient-primary rounded-circle ti-bar-chart mb-5 d-inline-block text-white"></i>
                    <i class="icon-lg icon-watermark text-white ti-bar-chart"></i>
                  </div>
                  <h4 class="mb-4">Analytics</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
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
