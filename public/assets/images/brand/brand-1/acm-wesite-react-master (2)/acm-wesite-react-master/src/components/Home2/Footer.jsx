import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="ep-footer position-relative">
      <div className="ep-container container">
        <div className="ep-footer__top">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="ep-footer__widget footer-about">
                <div className="ep-footer__logo">
                  <Link to="/home">
                    <img src="/assets/images/brand/acm_logo.png" alt="footer-logo" />
                  </Link>
                </div>
                <p className="ep-footer__text">
                  It is a long established fact that a reader will be distracted
                </p>
                <div className="ep-footer__contact">
                  <div className="ep-footer__contact-single">
                    <div className="ep-footer__contact-icon">
                   {/* <i className="fa fa-map-marker"></i>*/}
                    </div>
                    <div className="ep-footer__contact-info">
                      <p>Address</p>
                      <span>66 Broklyant, New York India</span>
                    </div>
                  </div>
                  <div className="ep-footer__contact-single">
                    <div className="ep-footer__contact-icon">
                    {/*<i className="fa fa-phone"></i> */}
                    </div>
                    <div className="ep-footer__contact-info">
                      <p>Phone Number</p>
                      <a href="tel:0123456789101">012 345 678 9101</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-4 col-12">
            
  <div className="ep-footer__widget footer-links">
    <h4 className="ep-footer__widget-title">Quick Links</h4>
    <ul className="ep-footer__links-list">
      <li>
        <Link to="/upcoming-events">Upcoming Events</Link>
      </li>
      <li>
        <Link to="/blog">Blogs</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/join-us">About Us</Link>
      </li>
    </ul>
  </div>
</div>


            <div className="col-lg-3 col-md-4 col-12">
              <div className="ep-footer__widget footer-newsletter">
                <h4 className="ep-footer__widget-title">Newsletter</h4>
                <form action="#" method="post" className="ep-footer__newsletter">
                  <input type="email" name="email" placeholder="Your e-mail" required />
                  <button type="submit">
                    <i className="fi fi-ss-paper-plane"></i>
                  </button>
                </form>
                <div className="ep-footer__social">
                  <h5 className="ep-footer__social-title">Follow Us</h5>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ep-footer__pattern">
        <img src="assets/images/footer/footer-pattern.png" alt="footer-pattern" />
      </div>
    </footer>
  );
};

export default Footer;
