import React from "react";

const ContactSection = () => {
  return (
    <section className="ep-contact section-gap section-bg-1 position-relative pb-5">
      <div className="ep-container container">
        <div className="row">
          <div className="col-lg-9 col-xl-7 col-12 col-md-10 mx-auto">
            <div className="ep-contact__form">
              <h3 className="ep-contact__form-title ep-split-text left">
                Submit Your Application.
              </h3>
              <form>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="your-name"
                    placeholder="Name "
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="your-email"
                    placeholder="Email "
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="your-number"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Field Of Interest</label>
                  <select
                    name="interest"
                    id="interest"
                    style={{ width: "100%" }}
                    required
                  >
                    <option value="">Select Subject</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="ml">Machine Learning</option>
                    <option value="ds">Data Science</option>
                    <option value="web">Web Development</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message here.."
                    required
                  />
                </div>
                <button type="submit" className="ep-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  return (
    <section className="ep-team section-gap position-relative">
      <div className="ep-team__pattern updown-ani">
        <img src="/assets/images/team/team-1/dot-pattern.svg" alt="dot-pattern" />
      </div>
      <div className="ep-container container">
        <div className="row">
          <div className="col-12">
            <div className="ep-section-head d-flex-end-between">
              <div className="ep-section-head__info">
                <span className="ep-section-head__sm-title ep2-color">
                  Our Mentor
                </span>
                <h3 className="ep-section-head__big-title ep-split-text left">
                  Meet Our <span>Inspiring</span> <br />
                  Dedicated Mentor
                </h3>
              </div>
              <div className="ep-section-head__btn">
                <a href="team.html" className="ep-btn">
                  View More <i className="fi fi-rs-arrow-small-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {[
            {
              name: "Dr. Uma M",
              role: "Faculty",
              imgSrc: "/assets/images/team/team-1/1.png",
            },
            {
              name: "Dr Beaulah Jayavathana R",
              role: "Faculty",
              imgSrc: "/assets/images/team/team-1/2.png",
            },
            {
              name: "K J Tilak Reddy",
              role: "Technical - Coordinator",
              imgSrc: "/assets/images/team/team-1/6.png",
            },
          ].map((member, index) => (
            <div
              className="col-lg-6 col-xl-4 col-md-6 col-12"
              key={index}
            >
              <div
                className="ep-team__card ep-team__card--style3 wow fadeInUp"
                data-wow-delay={`${0.3 + index * 0.2}s`}
                data-wow-duration="1s"
              >
                <a href="team-details.html" className="ep-team__img">
                  <img src={member.imgSrc} alt="team-img" />
                </a>
                <div className="ep-team__content">
                  <div className="ep-team__author">
                    <a href="team-details.html">
                      <h5>{member.name}</h5>
                    </a>
                    <p>{member.role}</p>
                  </div>
                  <div className="ep-team__social">
                    <span className="ep-team__social-btn">
                      <i className="fi-rr-share"></i>
                    </span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ContactSection, TeamSection };
