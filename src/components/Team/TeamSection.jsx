import React from 'react';
import TeamCard from './TeamCard';

const teamMembers = [
  { imgSrc: '/assets/images/Core team pictures/Dr. Uma.png', name: 'Dr. Uma M', position: 'Chair',link:'https://www.srmist.edu.in/faculty/dr-m-uma/' },
  { imgSrc: '/assets/images/Core team pictures/Dr. Beaulah.png', name: 'Dr Beaulah Jayavathana R', position: 'Vice Chair', link:'https://www.srmist.edu.in/faculty/dr-r-beaulah-jeyavathana/' },
{ imgSrc: '/assets/images/Core team pictures/Krithika.jpg', name: 'Krithika Ganesan', position: 'Chairman' },
  { imgSrc: '/assets/images/Core team pictures/Divyaa-.jpg', name: 'Divyaa Sriram', position: 'Co-Chairman' },
  { imgSrc: '/assets/images/Core team pictures/Karthik.jpg', name: 'Karthik Ganesan', position: 'Treasurer' },
  { imgSrc: '/assets/images/Core team pictures/Tilak.jpg', name: 'K J Tilak Reddy', position: 'Technical - Coordinator' },
  { imgSrc: '/assets/images/Core team pictures/Disha.jpg', name: 'Disha B', position: 'Technical - Coordinator' },
  { imgSrc: 'assets/images/Core team pictures/Jerin.jpg', name: 'Jerin Klaudia A', position: 'Creatives - Coordinator' },
  { imgSrc: 'assets/images/Core team pictures/Nithya--.jpg', name: 'M H Nithyashree', position: 'Social Media - Coordinator' },
  { imgSrc: '/assets/images/Core team pictures/Ralitsa.jpg', name: 'Ralitsa Narayan', position: 'Content and Editorial - Coordinator' },
  { imgSrc: '/assets/images/Core team pictures/Aditya.jpg', name: 'Aditya Gaurkar', position: 'Corporate and Logistics - Coordinator' },
  { imgSrc: '/assets/images/Core team pictures/Priya.jpg', name: 'Priyadarshini A', position: 'Women in Engineering - Coordinator' },
];

const TeamSection = () => {
  return (
    <section className="ep-team section-gap position-relative pd-top-90">
      <div className="container ep-container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamCard

              key={index}
              link={member.link}
              imgSrc={member.imgSrc}
              name={member.name}
              position={member.position}
              delay={0.3 + index * 0.2} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
