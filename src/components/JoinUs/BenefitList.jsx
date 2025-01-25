import React from 'react';
import BenefitItem from './BenefitItem';

const BenefitList = () => {
  const benefits = [
    { title: 'Access to Publications', description: 'Stay up-to-date with the latest research and developments in AI.' },
    { title: 'ACM Digital Library Access', description: 'Explore an extensive collection of AI literature and resources.' },
    { title: 'Career and Job Resources', description: 'Get assistance with placements and internships tailored to AI fields.' },
    { title: 'Networking Opportunities', description: 'Connect with experts from IITs, IIMs, and industry leaders.' },
    { title: 'Discounts and Special Offers', description: 'Enjoy reduced rates on conferences and events.' },
    { title: 'Professional Development', description: 'Gain insights and training to propel your AI career forward.' },
    { title: 'Student Research Competitions', description: 'Showcase your work and compete for recognition.' },
    { title: 'Scholarships and Awards', description: 'Earn prestigious accolades to support your academic journey.' }
  ];

  return (
    <div className="row">
      {benefits.map((benefit, index) => (
        <div className="col-md-6 mb-3" key={index}>
          <BenefitItem title={benefit.title} description={benefit.description} />
        </div>
      ))}
    </div>
  );
};

export default BenefitList;
