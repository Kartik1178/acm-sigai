import React from 'react';

const Category = () => {
  const categories = [
    { 
      name: "Social Media", 
      description: "Engage in online outreach and digital strategy.", 
      icon: "assets/images/category/category-1/1.svg", 
      bgColor: "ep1-bg"
    },
    { 
      name: "Content and Editorial", 
      description: "Craft content that informs and inspires.", 
      icon: "assets/images/category/category-1/6.svg", 
      bgColor: "ep5-bg"
    },
    { 
      name: "Creatives", 
      description: "Contribute to design and visual storytelling.", 
      icon: "assets/images/category/category-1/5.svg", 
      bgColor: "ep4-bg"
    },
    { 
      name: "Technical", 
      description: "Dive deep into coding, algorithms, and AI projects.", 
      icon: "assets/images/category/category-1/2.svg", 
      bgColor: "ep2-bg"
    },
    { 
      name: "Women in Engineering", 
      description: "Empower women in AI with dedicated initiatives.", 
      icon: "assets/images/category/category-1/8.svg", 
      bgColor: "ep4-bg"
    },
    { 
      name: "Corporate and Logistics", 
      description: "Manage events, sponsorships, and partnerships.", 
      icon: "assets/images/category/category-1/6.svg", 
      bgColor: "ep5-bg"
    },
  ];

  return (
    <section className="ep-category section-gap pt-0">
      <div className="ep-container container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-4 col-md-8 col-12">
            <div className="ep-section-head text-center">
              <span className="ep-section-head__sm-title ep1-color">Categories</span>
              <h3 className="ep-section-head__big-title ep-split-text left">
                Explore Our <span>Domains</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {categories.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <a href="course.html" className="ep-category__card wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                <div className={`ep-category__icon ${category.bgColor}`}>
                  <img src={category.icon} alt="category-icon" />
                </div>
                <div className="ep-category__info">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
