import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import CategoryList from './CategoryList';
import ProjectCard from './ProjectCard';

export const projects = [
  {
    index: 1,
    imgSrc: 'assets/images/blog/blog-1/1.png',
    title: 'Website Development',
    description:"Created the club's website",
    link: `/project-details/${1}`,
    date: '25 Dec',
    firstpara: "Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros the justo, posuere lobo, vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros a justo, posuere loborti viverra laoreet mat ullamcorper posue viverra .Aliquam",
    secondpara: "Education is a vital aspect of a child's development. Preschools, elementary schools, and middle schools play a significant role in providing quality education and fostering growth in young minds Education is a vital aspect of a child's development. Preschools, elementary schools, and middle schools play a the a significant role in providing quality education and fostering growth in young minds", 
    keypoints: {
      "1": "Nurturing Young Minds",
      "2": "Unlocking Potential",
      "3": "Through Education",
      "4": "Igniting Curiosity and Imagination",
      "5": "Foundation for Success"
    },
    eventlocation: 'Mirpur Bangladesh', 
    eventdate: "24 Aug 2024"
  }
];



const Projects = () => (
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <Breadcrumbs />
     
        <section className="ep-blog section-gap position-relative pt-4">   <div className="ep-container container">
   <div className="row">
 {projects.map((project, index) => (
   <ProjectCard key={index} {...project}  />
              ))}
            </div>
   </div>  </section>
      </main>
    </div>
  </div>
);

export default Projects;
