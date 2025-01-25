import React from 'react';

const BlogNavigation = () => (
  <div className="ep-blog__details-navigation">
    <span>By Stanio lainto</span>
    <ul className="ep-blog__navigation-tag">
      <li><a href="#">Interior</a></li>
      <li><a href="#">UX Design</a></li>
      <li><a href="#">Graphics</a></li>
    </ul>
    <ul className="ep-blog__navigation-social">
      <li><a href="#"><img src="assets/images/blog/details/facebook.svg" alt="facebook-icon" /></a></li>
      <li><a href="#"><img src="assets/images/blog/details/pinterest.svg" alt="pinterest-icon" /></a></li>
      <li><a href="#"><img src="assets/images/blog/details/linkedin.svg" alt="linkedin-icon" /></a></li>
    </ul>
  </div>
);

export default BlogNavigation;
