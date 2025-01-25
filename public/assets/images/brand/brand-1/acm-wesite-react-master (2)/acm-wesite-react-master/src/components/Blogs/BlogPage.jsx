import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import BlogList from './BlogList';
import Sidebar from './Sidebar';
import Pagination from './Pagination';

const BlogPage = () => {
  return (
    <main>
      <Breadcrumbs />
 <section className="ep-blog-page section-gap position-relative">
 <div className="container ep-container">
 <div className="row">
<div className="col-lg-12 col-xl-8 col-12">
<BlogList />
 <Pagination />
  </div>
<div className="col-lg-6 col-xl-4 col-md-8 col-12">
  <Sidebar />
</div>
 </div>
 </div>
      </section>
    </main>
  );
}

export default BlogPage;
