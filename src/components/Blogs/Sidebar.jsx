import React from 'react';

const Sidebar = () => {
  return (
    <div className="ep-blog__sidebar">
 
      <div className="ep-blog__sidebar-widget">
        <h4 className="ep-blog__sidebar-title">Search</h4>
        <form action="#" method="post" className="ep-blog__sidebar-search">
          <input type="search" name="search" placeholder="Search...." required />
          <button type="submit"><i className="fi-rr-search"></i></button>
        </form>
      </div>

      <div className="ep-blog__sidebar-widget">
        <h4 className="ep-blog__sidebar-title">About Me</h4>
        <div className="ep-blog__sidebar-about">
          <div className="ep-blog__about-img">
            <img src="assets/images/blog/sidebar/about-img.png" alt="about-img" />
          </div>
          <div className="ep-blog__about-info">
            <h6>Stanio lainto smarle</h6>
            <p>Aliquam eros justo, posuere loborti viverra ullamcorper posuere</p>
          </div>
          <div className="ep-blog__about-social">
            <ul>
              <li><a href="#"><i className="icofont-facebook"></i></a></li>
              <li><a href="#"><i className="icofont-twitter"></i></a></li>
              <li><a href="#"><i className="icofont-linkedin"></i></a></li>
              <li><a href="#"><i className="icofont-pinterest"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

  
      <div className="ep-blog__sidebar-widget">
        <h4 className="ep-blog__sidebar-title">Category</h4>
        <div className="ep-blog__sidebar-category">
          <ul>
            <li><a href="#">Learning <span>(02)</span></a></li>
            <li><a href="#">Einsteins Learning School <span>(05)</span></a></li>
            <li><a href="#">Kids Preschool <span>(10)</span></a></li>
            <li><a href="#">Learning Academy <span>(03)</span></a></li>
            <li><a href="#">Hoppers Kinderland <span>(10)</span></a></li>
            <li><a href="#">Sparkling Stars Preschool <span>(03)</span></a></li>
          </ul>
        </div>
      </div>

    
      <div className="ep-blog__sidebar-widget">
        <h4 className="ep-blog__sidebar-title">Latest Blogs</h4>
        <div className="ep-blog__latest">
          
          <div className="ep-blog__latest-item">
            <div className="ep-blog__latest-info">
              <span><i className="fi-rr-calendar"></i>Jan 10,2022</span>
              <a href="blog-details.html">Sparkling Stars the Preschool</a>
            </div>
            <div className="ep-blog__latest-img">
              <img src="assets/images/blog/sidebar/latest-1.png" alt="blog-img" />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
