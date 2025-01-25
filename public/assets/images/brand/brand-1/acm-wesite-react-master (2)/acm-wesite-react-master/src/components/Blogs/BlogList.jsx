import React from 'react';

const BlogCard = ({ imgSrc, date, title, comments, author }) => (
  <div className="ep-blog__card ep-blog__card--style2">
    <a href="blog-details.html" className="ep-blog__img">
      <img src={imgSrc} alt="blog-img" />
    </a>
    <div className="ep-blog__info">
      <div className="ep-blog__date">{date}</div>
      <div className="ep-blog__content">
        <div className="ep-blog__meta">
          <ul>
            <li><i className="fi-rr-comments"></i>Comments ({comments})</li>
            <li><a href="#"><i className="fi-rr-user"></i>By {author}</a></li>
          </ul>
        </div>
        <a href="blog-details.html" className="ep-blog__title">
          <h5 className="m-0">{title}</h5>
        </a>
        <div className="ep-blog__btn">
          <a href="blog-details.html">Read More <i className="fi fi-rs-arrow-small-right"></i></a>
        </div>
      </div>
    </div>
  </div>
);

const BlogList = () => {
  return (
    <div className="ep-blog__list">
      <BlogCard imgSrc="assets/images/blog/blog-1/4.png" date="5 January 2024" title="Lifelong Learning Endless was Possibilities" comments="05" author="admin" />
      <BlogCard imgSrc="assets/images/blog/blog-1/2.png" date="5 January 2024" title="Foundation for a better most tomorrow design" comments="05" author="admin" />
      <BlogCard imgSrc="assets/images/blog/blog-1/3.png" date="5 January 2024" title="Empowering Students designer is Transforming Lives" comments="05" author="admin" />
      <BlogCard imgSrc="assets/images/blog/blog-1/4.png" date="5 January 2024" title="Wonderworks Child Develop Center Learning Safari Preschool" comments="05" author="admin" />
    </div>
  );
};

export default BlogList;
