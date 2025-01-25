
import React from 'react';

const MobileMenu = () => {
  return (
    <div className="modal mobile-menu-modal offcanvas-modal fade" id="offcanvas-modal">
      <div className="modal-dialog offcanvas-dialog">
        <div className="modal-content">
          <div className="modal-header offcanvas-header">
            <div className="offcanvas-logo">
              <a href="index.html">
                <img src="assets/images/logo-3.svg" alt="logo" />
              </a>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <i className="fi fi-ss-cross"></i>
            </button>
          </div>
          <div className="mobile-menu-modal-main-body">
            <nav id="offcanvas-menu" className="navigation offcanvas-menu">
              <ul id="nav mobile-nav" className="offcanvas-men-list list-none">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#">Events <i className="fi fi-ss-angle-small-down"></i></a>
                  <ul className="sub-menu">
                    <li>
                      <a href="upcoming-events.html">Upcoming Events</a>
                    </li>
                    <li>
                      <a href="past-events.html">Past Events</a>
                    </li>
                  </ul>
                </li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="blog.html">Blogs</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="join-us.html">Join Us</a></li>
                <li><a href="team-details.html">Teams</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
