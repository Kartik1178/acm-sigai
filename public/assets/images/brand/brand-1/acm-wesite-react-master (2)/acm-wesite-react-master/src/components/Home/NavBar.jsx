import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="ep-header position-relative section-bg-1">
      <div className="ep-topbar">
        <div className="ep-container container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-6">
              <div className="ep-topbar__column">
                <div className="ep-logo">
                  <Link to="/home">
                    <img src="/assets/images/brand/acm_logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="active-sticky" className="ep-header__middle">
        <div className="ep-container container">
          <div className="ep-header__inner">
            <div className="row align-items-center">
              <div className="col-lg-10 col-12">
                <nav className="ep-header__navigation">
                  <ul className="ep-header__menu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link>Events <i className="fi fi-ss-angle-small-down"></i></Link>
                      <ul className="sub-menu">
                        <li><Link to="/upcoming-events">Upcoming Events</Link></li>
                        <li><Link to="/past-events">Past Events</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/join-us">Join Us</Link></li>
                    <li><Link to="/team">Teams</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
