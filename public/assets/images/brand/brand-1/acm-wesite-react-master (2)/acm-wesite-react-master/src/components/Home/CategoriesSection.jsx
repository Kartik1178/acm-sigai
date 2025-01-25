import React from 'react';

const CategoriesSection = () => {
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

          <div className="col-lg-4 col-md-6 col-12">
            <a href="course.html" className="ep-category__card wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
              <div className="ep-category__icon ep1-bg">
                <img src="assets/images/category/category-1/1.svg" alt="category-icon" />
              </div>
              <div className="ep-category__info">
                <h3>Social Media</h3>
                <p>Engage in online outreach and digital strategy.</p>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <a href="course.html" className="ep-category__card wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
              <div className="ep-category__icon ep5-bg">
                <img src="assets/images/category/category-1/6.svg" alt="category-icon" />
              </div>
              <div className="ep-category__info">
                <h3>Content and Editorial</h3>
                <p>Craft content that informs and inspires.</p>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <a href="course.html" className="ep-category__card wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
              <div className="ep-category__icon ep4-bg">
                <img src="assets/images/category/category-1/5.svg" alt="category-icon" />
              </div>
              <div className="ep-category__info">
                <h3>Creatives</h3>
                <p>Contribute to design and visual storytelling.</p>
              </div>
            </a>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <a href="course.html" className="ep-category__card wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
              <div className="ep-category__icon ep2-bg">
                <img src="assets/images/category/category-1/2.svg" alt="category-icon" />
              </div>
              <div className="ep-category__info">
                <h3>Technical</h3>
                <p>Dive deep into coding, algorithms, and AI projects.</p>
              </div>
            </a>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <a href="course.html" className="ep-category__card wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
              <div className="ep-category__icon ep4-bg">
                <img src="assets/images/category/category-1/8.svg" alt="category-icon" />
              </div>
              <div className="ep-category__info">
                <h3>Women in Engineering</h3>
                <p>Empower women in AI with dedicated initiatives.</p>
              </div>
            </a>
          </div>

          <div className="col-12">
            <a href="course.html" className="ep-category__card wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
              <div className="ep-category__icon ep5-bg">
                <img src="assets/images/category/category-1/6.svg" alt="category-icon" />
              </div>
              <div className="ep-category__info">
                <h3>Corporate and Logistics</h3>
                <p>Manage events, sponsorships, and partnerships. Join us to be part of a transformative AI experience and gain the skills, resources, and network needed to thrive in the world of Artificial Intelligence.</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
