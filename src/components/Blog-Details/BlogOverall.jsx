import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from './BlogContent';
const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.index === parseInt(id));
  return(
  <section class="ep-event__details section-gap position-relative">
  <div class="ep-container container">
    <div class="row">
      <div class="col-lg-12 col-xl-8 col-12">
        <div class="ep-event__details-content">
          <div class="ep-event__widget">
            <h3 class="ep-event__widget-title">{blog.title}</h3>
            {blog.paras.map((para, index) => (
           
            <p  key={ index}class="ep-event__widget-text">
              {para.para}
            </p>
          
            ))}
            
           
          
          </div>
          <div class="ep-event__widget">
            
          
           
          </div>
        </div>
      </div>
      <div class="col-lg-8 col-xl-4 col-12">
      
      <div className="ep-event__location-map">
                <div className="gmap_canvas">
                  <img
                    src={blog.coverImg}
                    width="830"
                    height="320"
                    style={{ border: '0' }}
                    title="Event Location Map"
                  />
                </div>
              </div>
      </div>
    </div>
  </div>
</section>)
};

export default BlogDetails;
