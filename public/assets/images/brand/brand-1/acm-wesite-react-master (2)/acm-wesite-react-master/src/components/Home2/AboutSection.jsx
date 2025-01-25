import React from 'react';

const AboutSection = () => (
  <section className="ep-about ep-section section-gap position-relative">
    <div className="ep-about__shape updown-ani">
      <img src="/assets/images/about/about-1/circle-shape.svg" alt="circle-shape" width={100} height={100} />
    </div>
    <div className="ep-container container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12">
          <div className="ep-section__img position-relative">
            <div className="ep-section__img-shape rotate-ani">
              <img src="/assets/images/about/about-1/pattern-shape.svg" alt="pattern-shape" width={100} height={100} />
            </div>
            <div className="ep-section__img-main">
              <img src="/assets/images/about/about-1/about-img.png" alt="about-img" width={500} height={500} />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="ep-section__content">
            <div className="ep-section-head">
              <span className="ep-section-head__sm-title ep1-color">Know About Us</span>
              <h3 className="ep-section-head__big-title ep-split-text left">
                Unlocking the <span>Power</span> <br />
                of Knowledge
              </h3>
              <p className="ep-section-head__text">
                Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa eu faucibus.
                Urna fusce aenean tortor pretium. Ac
              </p>
            </div>
            <div className="ep-section__widget">
              <div className="ep-feature-list">
                <div className="ep-feature-list__icon">
                  <i className="fi fi-ss-check-circle"></i>
                </div>
                <div className="ep-feature-list__info">
                  <h5>ACM Digital Library Access</h5>
                  <p>Explore an extensive collection of AI literature and resources.</p>
                </div>
              </div>
              <div className="ep-feature-list">
                <div className="ep-feature-list__icon">
                  <i className="fi fi-ss-check-circle"></i>
                </div>
                <div className="ep-feature-list__info">
                  <h5>Access to Publications</h5>
                  <p>Stay up-to-date with the latest research and developments in AI.</p>
                </div>
              </div>
            </div>
            <div className="ep-section__btn">
              <a href="join-us.html" className="ep-btn border-btn">Read More <i className="fi fi-rs-arrow-small-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

