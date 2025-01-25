import React from 'react';
import { Link } from 'react-router-dom';
const ProjectCard = ({ imgSrc, title, description, link, date }) => (
  <div className="col-lg-6 col-xl-4 col-md-6 col-12">
    <div className="ep-blog__card wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s" style={{ position: 'relative' }}>
      <div className="ep-blog__img">
        <img src={imgSrc} alt="project-img" />
      </div>
      <div className="ep-blog__info">
        <div className="ep-blog__date ep1-bg">
          {date.split(' ')[0]} <br />
          {date.split(' ')[1]}
        </div>

        <div className="ep-blog__content">
       
            <h5>{title}</h5>
        
          <p className="ep-blog__text">{description}</p>
          
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
