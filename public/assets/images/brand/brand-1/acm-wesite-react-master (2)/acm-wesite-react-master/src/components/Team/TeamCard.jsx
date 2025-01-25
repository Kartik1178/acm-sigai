import React from 'react';

const TeamCard = ({ imgSrc, name, position, delay }) => {
  return (
    <div
      className="col-lg-6 col-xl-4 col-md-6 col-12"
      style={{ animationDelay: `${delay}s`, animationDuration: '1s' }}
    >
      <div className="ep-team__card ep-team__card--style3 wow fadeInUp">
        <a href="team-details.html" className="ep-team__img">
          <img src={imgSrc} alt="team-img" />
        </a>
        <div className="ep-team__content">
          <div className="ep-team__author">
            <a href="team-details.html">
              <h5>{name}</h5>
            </a>
            <p>{position}</p>
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
  );
};

export default TeamCard;


