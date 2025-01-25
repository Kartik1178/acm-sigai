import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import CategoryList from './CategoryList';
import ProjectCard from './ProjectCard';

const projects = [
  {
    imgSrc: 'assets/images/blog/blog-1/1.png',
    title: 'Education foundation',
    description: 'Education is the key to stude Unlock your horizons education',
    link: 'project-details.html',
    date: '25 Dec',
  },
  {
    imgSrc: 'assets/images/blog/blog-1/2.png',
    title: 'Introduction to Psychology',
    description: 'Education is the key to stude Unlock your horizons education',
    link: 'project-details.html',
    date: '25 Dec',
  },
  {
    imgSrc: 'assets/images/blog/blog-1/3.png',
    title: 'Principles of Economics',
    description: 'Education is the key to stude Unlock your horizons education',
    link: 'project-details.html',
    date: '25 Dec',
  },
  {
    imgSrc: 'assets/images/blog/blog-1/1.png',
    title: 'Education foundation',
    description: 'Education is the key to stude Unlock your horizons education',
    link: 'project-details.html',
    date: '25 Dec',
  },
];

const Projects = () => (
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <Breadcrumbs />
        <CategoryList />
        <section className="ep-blog section-gap position-relative pt-4">   <div className="ep-container container">
   <div className="row">
 {projects.map((project, index) => (
   <ProjectCard key={index} {...project} />
              ))}
            </div>
   </div>  </section>
      </main>
    </div>
  </div>
);

export default Projects;
