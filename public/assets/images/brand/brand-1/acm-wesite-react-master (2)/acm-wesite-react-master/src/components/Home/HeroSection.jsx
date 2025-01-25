import React from 'react';

const HeroSection = () => (
  <section className="ep-hero section-bg-1">
    <div className="ep-container container">
      <div className="row align-items-center">
        <div className="col-lg-12 col-xl-6 col-12">
          <div className="ep-hero__content">
            <span className="ep-section-head__sm-title ep1-color">AI MATTERS</span>
            <h1 className="ep-hero__title ep-split-text left">
              Welcome to SRM
              <span>
                ACM SIGAI
                <a className="ep-hero__hover-images position-relative" href="join-us.html">
                  <img className="hover-img-1 wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="1s"
                    src="/assets/images/hero/home-1/text-arrow.svg" alt="arrow" width={50} height={50} />
                  <img className="hover-img-2" src="/assets/images/hero/home-1/hover-img.jpg" alt="hover-img" width={500} height={500} />
                </a>
              </span>
              Student Chapter
            </h1>
            <p className="ep-hero__text">
              Welcome to ACM SIGAI! We're a student-led chapter fostering an active AI community. Join us to explore, innovate, and
              share in advancing AI through events, projects, and collaborations that offer valuable learning and growth
              opportunities. Be part of a community where AI matters!
            </p>
            <div className="ep-hero__btn">
              <a href="join-us.html" className="ep-btn">Explore Now <i className="fi fi-rs-arrow-small-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6 col-12 order-top">
          <div className="ep-hero__widget">
            <div className="ep-hero__widget-column">
              <div className="ep-hero__widget-arrow ep-hobble">
                <a href="contact.html" className="ep-hover-layer-2">
                  <i className="fi fi-ss-arrow-up-right"></i>
                </a>
              </div>
              <div className="ep-hero__widget-img">
                <img src="/assets/images/hero/home-1/img-1.png" alt="hero-img" width={500} height={500} />
              </div>
              <div className="ep-hero__team">
                <div className="ep-hero__team-img">
                  <ul className="ep-hero__team-img-list">
                    <li><img src="/assets/images/hero/home-1/team/1.png" alt="team-img" width={50} height={50} /></li>
                    <li><img src="/assets/images/hero/home-1/team/2.png" alt="team-img" width={50} height={50} /></li>
                    <li><img src="/assets/images/hero/home-1/team/3.png" alt="team-img" width={50} height={50} /></li>
                    <li><img src="/assets/images/hero/home-1/team/4.png" alt="team-img" width={50} height={50} /></li>
                  </ul>
                </div>
                <div className="ep-hero__team-info">
                  <h5><span className="counter">3,000</span>+</h5>
                  <p>Experience Team</p>
                </div>
              </div>
            </div>
            <div className="ep-hero__shape updown-ani">
              <img src="/assets/images/hero/home-1/shape.svg" alt="shape" width={100} height={100} />
            </div>
            <div className="ep-hero__widget-column">
              <div className="ep-hero__course">
                <span className="counter">500</span>
                <p>Available <br />Course</p>
              </div>
              <div className="ep-hero__widget-img">
                <img src="/assets/images/hero/home-1/img-2.png" alt="hero-img" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
