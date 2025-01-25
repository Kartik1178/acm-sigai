import React from 'react';

const BlogWidget = ({ title, children }) => (
  <div className="ep-blog__details-widget">
    <h3 className="ep-blog__details-widget-title">{title}</h3>
    <p className="ep-blog__details-text">{children}</p>
  </div>
);

export default BlogWidget;
