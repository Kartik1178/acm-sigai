import React from 'react';

const BenefitItem = ({ title, description }) => {
  return (
    <div className="ep-section__widget">
      <div className="ep-feature-list">
        <div className="ep-feature-list__icon">
          <i className="fi fi-ss-check-circle"></i>
        </div>
        <div className="ep-feature-list__info">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitItem;
