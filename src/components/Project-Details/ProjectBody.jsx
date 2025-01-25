import React from 'react'
import { projects } from '../Projects/Projects'
import { useParams } from 'react-router-dom'
const ProjectBody = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.index === parseInt(id));
    return (
    <section class="ep-event__details section-gap position-relative">
    <div class="ep-container container">
      <div class="row">
        <div class="col-lg-12 col-xl-8 col-12">
          <div class="ep-event__details-content">
            <div class="ep-event__widget">
              <h3 class="ep-event__widget-title">{project.title}</h3>
              <p class="ep-event__widget-text">
                {project.firstpara}
              </p>
              <br />
              <p class="ep-event__widget-text">
               {project.secondpara}
              </p>
              <br />
             
              <ul class="ep-event__widget-list">
              {Object.values(project.keypoints).map((keypoint,index)=>(
                <li key={index}>
                  <i class="fi-ss-check-circle"></i>Nurturing Young
                  Minds
                </li>
    ))}
              </ul>
            </div>
            <div class="ep-event__widget">
              <h3 class="ep-event__widget-title">Event Location</h3>
              <ul class="ep-event__widget-meta">
                <li>
                  <i class="fi fi-rs-marker"></i>{project.eventlocation}
                </li>
                <li><i class="fi fi-rr-calendar-clock"></i>{project.eventdate}</li>

              </ul>
              <div className="ep-event__location-map">
                  <div className="gmap_canvas">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7298.959613692403!2d90.36501104141328!3d23.83709017812546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c17cf9e11737%3A0x44c49aa5dd7c3f00!2sMirpur%20DOHS%20Cultural%20Center!5e0!3m2!1sen!2sbd!4v1721998237394!5m2!1sen!2sbd"
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
        <div class="col-lg-8 col-xl-4 col-12">
          <div class="ep-blog__sidebar-widget">
            <h4 class="ep-blog__sidebar-title">About Me</h4>
            <div class="ep-blog__sidebar-about">
              <div class="ep-blog__about-img">
                <img src="assets/images/blog/sidebar/about-img.png" alt="about-img" />
              </div>
              <div class="ep-blog__about-info">
                <h6>Stanio lainto smarle</h6>
                <p>
                  Aliquam eros justo, posuere loborti viverra
                  ullamcorper posuere
                </p>
              </div>
              <div class="ep-blog__about-social">
                <ul>
                  <li>
                    <a href="#">
                      <i class="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  )
}

export default ProjectBody