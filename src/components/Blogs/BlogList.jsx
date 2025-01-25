import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../Blog-Details/BlogContent';
const BlogCard = ({ imgSrc, date, title,  author,link }) => (
  <div className="ep-blog__card ep-blog__card--style2">
    <Link to={link} className="ep-blog__img">
      <img src={imgSrc} alt="blog-img" />
    </Link>
    <div className="ep-blog__info">
      <div className="ep-blog__date">{date}</div>
      <div className="ep-blog__content">
        <div className="ep-blog__meta">
          <ul>
           
            <li><a href="#"><i className="fi-rr-user"></i>By {author}</a></li>
          </ul>
        </div>
        <Link to={link} className="ep-blog__title">
          <h5 className="m-0">{title}</h5>
        </Link>
        <div className="ep-blog__btn">
        <Link to={link}>Read More <i className="fi fi-rs-arrow-small-right"></i></Link>
        </div>
      </div>
    </div>
  </div>
);

const BlogList = () => {
  return (
    <div className="ep-blog__list blog">
      {blogs.map((blog,index)=>(
      <BlogCard key={index} imgSrc={blog.coverImg} date={blog.date} title={blog.title} author={blog.author} link={blog.link}/>
      ))}</div>
  );
};

export default BlogList;
