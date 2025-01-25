import React, { useState } from 'react';
import PopUpComponent from './PopUp';
const HeroSection = () => {
  const [PopUp,setPopUp]=useState(false);

  return(
    
  <section className="ep-hero section-bg-1">
    {PopUp && <PopUpComponent setPopUp={setPopUp} />}
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
              <a href="join-us.html" className="ep-btn" onClick={(e) => { e.preventDefault(); setPopUp(true); }}>Explore Now <i className="fi fi-rs-arrow-small-right"></i></a>
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
                <img src="/assets/images/hero/home-1/img3.jpg" alt="hero-img" width={600}  height={600} />
              </div>
             
            </div>
            
            <div className="ep-hero__widget-column">
              
              <div className="ep-hero__widget-img">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>)
};

export default HeroSection;
