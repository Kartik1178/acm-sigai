import React from 'react';
import { Breadcrumbs } from '../BreadCrumbsMain';
import BlogList from './BlogList';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import './blog.css';
const BlogPage = () => {
  return (
    <main>
  <Breadcrumbs title="Blogs" activePath="/blog" />

 <section className="ep-blog-page section-gap blogposition position-relative">
 <div className="container ep-container">
 <div className="row">
<div className="col-lg-12 col-xl-8 col-12">
<BlogList />
 {/*<Pagination />*/}
  </div>
{/* <div className="col-lg-6 col-xl-4 col-md-8 col-12">
  <Sidebar />
</div>*/ }
 </div>
 </div>
      </section>
    </main>
  );
}

export default BlogPage;
