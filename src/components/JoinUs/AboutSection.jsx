import React from 'react';
import BenefitList from './BenefitList';

const AboutSection = () => {
  return (
    <section className="ep-about ep-section section-gap position-relative">
      <div className="ep-about__shape updown-ani">
        <img src="assets/images/about/about-1/circle-shape.svg" alt="circle-shape" />
      </div>
      <div className="ep-container container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="ep-section__img position-relative">
              <div className="ep-section__img-shape rotate-ani">
                <img src="assets/images/about/about-1/pattern-shape.svg" alt="pattern-shape" />
              </div>
              <div className="ep-section__img-main">
                <img src="assets/images/about/about-2/about-img.png" alt="about-img" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="ep-section__content">
              <div className="ep-section-head">
                <span className="ep-section-head__sm-title ep1-color">Know About Us</span>
                <h3 className="ep-section-head__big-title ep-split-text left">
                  Why <span>Join</span> Us?
                </h3>
                <p className="ep-section-head__text">
                  Unlock your potential with ACM SIGAI, SRM's pioneering student chapter
                  dedicated to the fascinating world of Artificial Intelligence. Whether you're
                  looking to advance your AI skills, boost your career prospects, or connect with
                  a community of like-minded innovators, SIGAI offers a platform for growth, learning, and
                  inspiration. Join us to enhance your AI journey and open doors to extraordinary opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mb-3 py-5">
          <h3 className="ep-section-head__big-title ep-split-text text-center">
            Benefits of Joining <span>SIGAI</span>
          </h3>
        </div>
        <BenefitList />
      </div>
    </section>
  );
};

export default AboutSection;
