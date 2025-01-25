import React from 'react';

const Team = () => {
  const teamMembers = [
    { 
      name: "Bessie Cooper", 
      role: "Mentor", 
      image: "assets/images/team/team-1/1.png"
    },
    { 
      name: "Arlene McCoy", 
      role: "Senior Mentor", 
      image: "assets/images/team/team-1/2.png"
    },
    { 
      name: "Brooklyn Simmons", 
      role: "Assistant Teacher", 
      image: "assets/images/team/team-1/3.png"
    },
  ];

  return (
    <section className="ep-team section-gap position-relative">
      <div className="ep-team__pattern updown-ani">
        <img src="assets/images/team/team-1/dot-pattern.svg" alt="dot-pattern" />
      </div>
      <div className="ep-container container">
        <div className="row">
          <div className="col-12">
            <div className="ep-section-head d-flex-end-between">
              <div className="ep-section-head__info">
                <span className="ep-section-head__sm-title ep2-color">Our Mentor</span>
                <h3 className="ep-section-head__big-title ep-split-text left">
                  Meet Our <span>Inspiring</span> <br /> Dedicated Mentor
                </h3>
              </div>
              <div className="ep-section-head__btn">
                <a href="team.html" className="ep-btn">View More <i className="fi fi-rs-arrow-small-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-6 col-xl-4 col-md-6 col-12">
              <div className="ep-team__card wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                <a href="team-details.html" className="ep-team__img">
                  <img src={member.image} alt="team-img" />
                </a>
                <div className="ep-team__content">
                  <div className="ep-team__author">
                    <a href="team-details.html">
                      <h5>{member.name}</h5>
                    </a>
                    <p>{member.role}</p>
                  </div>
                  <div className="ep-team__social">
                    <span className="ep-team__social-btn"><i className="fi-rr-share"></i></span>
                    <ul>
                      <li><a href="#"><i className="icofont-twitter"></i></a></li>
                      <li><a href="#"><i className="icofont-facebook"></i></a></li>
                      <li><a href="#"><i className="icofont-instagram"></i></a></li>
                      <li><a href="#"><i className="icofont-linkedin"></i></a></li>
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

export default Team;
