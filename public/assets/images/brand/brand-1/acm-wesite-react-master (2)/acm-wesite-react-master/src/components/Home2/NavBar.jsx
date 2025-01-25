import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="ep-header position-relative section-bg  z-3">
   
      <div className="ep-topbar">
        <div className="ep-container container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-6">
              <div className="ep-topbar__column">
               {/* <div className="ep-logo">
                  <Link to="/">
                    <img src="/assets/images/brand/acm_logo.png" alt="logo" className="img-fluid" />
                  </Link> </div> */}
                
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div id="active-sticky" className="ep-header__middle">
        <div className="ep-container container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
          
              <Link className="navbar-brand ep-logo me-5" to="/">
              <img src="/assets/images/brand/acm_logo.png" alt="logo" className="img-fluid" />
              </Link>

             
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav w-100 justify-content-between">
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle fs-5"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Events
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" to="/upcoming-events">
                          Upcoming Events
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/past-events">
                          Past Events
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/projects">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/blog">
                      Blogs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/gallery">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/join-us">
                      Join Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/team">
                      Teams
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


