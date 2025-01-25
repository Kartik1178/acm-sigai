import React from 'react';

const ProjectCard = ({ imgSrc, title, description, link, date }) => (
  <div className="col-lg-6 col-xl-4 col-md-6 col-12">
    <div className="ep-blog__card wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s" style={{ position: 'relative' }}>
      <a href={link} className="ep-blog__img">
        <img src={imgSrc} alt="project-img" />
      </a>
      <div className="ep-blog__info">
        <div className="ep-blog__date ep1-bg">
          {date.split(' ')[0]} <br />
          {date.split(' ')[1]}
        </div>

        <div className="ep-blog__content">
          <a href={link} className="ep-blog__title">
            <h5>{title}</h5>
          </a>
          <p className="ep-blog__text">{description}</p>
          <div className="ep-blog__btn">
            <a href={link}>
              Read More
              <i className="fi fi-rs-arrow-small-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
