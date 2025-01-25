// FunfactAndFaqSection.js
import React from "react";

const FunfactAndFaqSection = () => {
  return (
    <div className="ep-section-bg bg-img-1">
      {/* Start Funfact Area */}
      <section className="ep-funfact section-gap pb-0">
        <div className="ep-container container">
          <div className="row g-0 justify-content-between">
            {/* Single Funfact Card 1 */}
            <div className="col-xl-auto col-lg-3 col-md-6 col-12">
              <div className="ep-funfact__card wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                <div className="ep-funfact__icon ep3-bg">
                  <img src="assets/images/funfact/funfact-1/1.svg" alt="funfact-icon" />
                </div>
                <div className="ep-funfact__info">
                  <h4><span className="counter">2</span></h4>
                  <p>Events</p>
                </div>
              </div>
            </div>
            {/* Single Funfact Card 2 */}
            <div className="col-xl-auto col-lg-3 col-md-6 col-12">
              <div className="ep-funfact__card wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                <div className="ep-funfact__icon ep1-bg">
                  <img src="assets/images/funfact/funfact-1/2.svg" alt="funfact-icon" />
                </div>
                <div className="ep-funfact__info">
                  <h4><span className="counter">1</span></h4>
                  <p>Projects</p>
                </div>
              </div>
            </div>
            {/* Single Funfact Card 3 */}
            <div className="col-xl-auto col-lg-3 col-md-6 col-12">
              <div className="ep-funfact__card wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                <div className="ep-funfact__icon ep8-bg">
                  <img src="assets/images/funfact/funfact-1/3.svg" alt="funfact-icon" />
                </div>
                <div className="ep-funfact__info">
                  <h4><span className="counter">2</span></h4>
                  <p>Blogs</p>
                </div>
              </div>
            </div>
            {/* Single Funfact Card 4 */}
            <div className="col-xl-auto col-lg-3 col-md-6 col-12">
              <div className="ep-funfact__card wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
                <div className="ep-funfact__icon ep7-bg">
                  <img src="assets/images/funfact/funfact-1/4.svg" alt="funfact-icon" />
                </div>
                <div className="ep-funfact__info">
                  <h4><span className="counter">30</span></h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="ep-faq mg-top-80 position-relative">
        <div className="ep-faq__pattern-2 updown-ani">
          <img src="assets/images/faq/faq-1/pattern-2.svg" alt="pattern-2" />
        </div>
        <div className="ep-container container">
          <div className="ep-faq__inner position-relative">
            <div className="ep-faq__pattern-1 rotate-ani">
              <img src="assets/images/faq/faq-1/pattern-1.svg" alt="pattern-1" />
            </div>
            <div className="row g-0 align-items-center">
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="ep-faq__img">
                  <img src="assets/images/faq/faq-1/faq-img.png" alt="faq-img" />
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="ep-faq__content">
                  <div className="ep-section-head">
                    <span className="ep-section-head__sm-title ep1-color">Faq</span>
                    <h3 className="ep-section-head__big-title ep-split-text left">
                      Frequently <span>Asked</span> <br />
                      Questions and Answers
                    </h3>
                  </div>
                  <div className="ep-faq__accordion faq-inner accordion" id="accordionExample">
                 
                    <div className="ep-faq__accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span>01</span>What are the benefits of education?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse show collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="ep-faq__accordion-body">
                          <p className="ep-faq__accordion-text">
                            The generated is therefore always free from repetition is the injected humour or words etc.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Single Faq Item 2 */}
                    <div className="ep-faq__accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span>02</span>How can I find the program for me?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="ep-faq__accordion-body">
                          <p className="ep-faq__accordion-text">
                            The generated is therefore always free from repetition is the injected humour or words etc.
                          </p>
                        </div>
                      </div>
                    </div>
              
                    <div className="ep-faq__accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span>03</span>Can I get financial for my education?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="ep-faq__accordion-body">
                          <p className="ep-faq__accordion-text">
                            The generated is therefore always free from repetition is the injected humour or words etc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
};

export default FunfactAndFaqSection;
