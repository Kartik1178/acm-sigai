import React from 'react';

const CategoryList = () => (
  <section id="events-category">
    <div className="container-fluid container-lg pt-3">
      <div className="row">
        <div className="col-12">
          <div className="categories">
            {['Artificial Intelligence', 'Machine Learning', 'Web Development', 'App Development'].map((category, index) => (
              <div key={index} className={`category ep1-bg ${index === 0 ? 'active' : ''}`}>
                <span>{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CategoryList;
