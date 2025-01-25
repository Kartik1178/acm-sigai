import React from 'react';
import TeamCard from './TeamCard';

const teamMembers = [
  { imgSrc: 'assets/images/team/team-1/1.png', name: 'Dr. Uma M', position: 'Faculty' },
  { imgSrc: 'assets/images/team/team-1/2.png', name: 'Dr Beaulah Jayavathana R', position: 'Faculty' },
  { imgSrc: 'assets/images/team/team-1/3.png', name: 'Krithika Ganesan', position: 'Chairman' },
  { imgSrc: 'assets/images/team/team-1/4.png', name: 'Divyaa Sriram', position: 'Co-Chairman' },
  { imgSrc: 'assets/images/team/team-1/5.png', name: 'Karthik Ganesan', position: 'Treasurer' },
  { imgSrc: 'assets/images/team/team-1/6.png', name: 'K J Tilak Reddy', position: 'Technical - Coordinator' },
  { imgSrc: 'assets/images/team/team-1/5.png', name: 'Disha B', position: 'Technical - Coordinator' },
  { imgSrc: 'assets/images/team/team-1/5.png', name: 'Jerin Klaudia A', position: 'Creatives - Coordinator' },
  { imgSrc: 'assets/images/team/team-1/5.png', name: 'M H Nithyashree', position: 'Social Media - Coordinator' },
  { imgSrc: 'assets/images/team/team-1/5.png', name: 'Ralitsa Narayan', position: 'Content and Editorial - Coordinator' },
  { imgSrc: 'assets/images/team/team-1/5.png', name: 'Aditya Gaurkar', position: 'Corporate and Logistics - Coordinator' },
  { imgSrc: 'assets/images/team/team-1/5.png', name: 'Priyadarshini A', position: 'Women in Engineering - Coordinator' },
];

const TeamSection = () => {
  return (
    <section className="ep-team section-gap position-relative pd-top-90">
      <div className="container ep-container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              imgSrc={member.imgSrc}
              name={member.name}
              position={member.position}
              delay={0.3 + index * 0.2} // Staggered delay for animation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
