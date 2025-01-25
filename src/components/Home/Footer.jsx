import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
const Footer = () => {
  return (
    <footer id="custom-footer" className="custom-footer position-relative">
      <div className="container">
        <div className="custom-footer__top">
          <div className=" row flex-lg-row align-items-center justify-content-around">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="custom-footer__widget footer-about">
                <div className="custom-footer__logo">
                  <Link to="/home">
                    <img
                      src="assets/images/brand/acm_logo.png"
                      alt="footer-logo"
                      className="custom-footer__logo-img"
                    />
                  </Link>
                </div>
                <p className="custom-footer__text">Want to find us? We are here</p>
                <div className="custom-footer__contact">
                  <div className="custom-footer__contact-item">
                    <div className="custom-footer__contact-icon">
                      <i className="fi fi-rs-marker"></i>
                    </div>
                   <div className="d-flex flex-row align-items-center">
                    <div className="footer-contact">
                    <div className="custom-footer__contact-info">
                      <p>Address</p>
                      <span>
                        SRM Nagar, Kattankulathur - 603 203
                        <br />
                        Chengalpattu District, Tamil Nadu.
                      </span>
                    </div>
                  </div>
                  <div className="custom-footer__contact-item">
                    <div className="custom-footer__contact-icon">
                      <i className="fi fi-rr-phone-call"></i>
                    </div>
                    <div className="custom-footer__contact-info">
                      <p>Email Us</p>
                      <a >acmcintel@gmail.com</a>
                    </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="custom-footer__widget footer-newsletter">
                <div className="custom-footer__map">
                  <iframe
                    width="100%"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=srmist%20%20kattankulathur%20potheri%20kanchipuram%20tamilnadu+(srm)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    title="Google Map Location"
                  >
                    <a href="https://www.gps.ie/" target="_blank" rel="noopener noreferrer">gps vehicle tracker</a>
                  </iframe>
                </div>

                <div className="custom-footer__social">
                  <h5 className="custom-footer__social-title">Follow Us</h5>
                  <ul className="custom-footer__social-links">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/srmsigai/">
                        <i className="instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/srmsigai" target="_blank" rel="noopener noreferrer">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/srmist-ktr-acm-sigai/">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/SRMIST-KTR-ACM-SIGAI">
                       <i className="icofont-github"></i>
                      </a>
                    </li> 
                    <li>
                      <a href="http://www.instagram.com/srmsigai">
                       <i className="icofont-instagram"></i>
                      </a>
                    </li> 
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="custom-footer__widget footer-quick-links">
                <h5 className="custom-footer__widget-title">Quick Links</h5>
                <ul className="custom-footer__links">
                  <li><Link to="/blogs">Blogs</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a href="https://www.linkedin.com/in/kartikeya-pusapati-bb151430b/">
        <p className="custom-footer__copy authornpm ">Created By Kartikeya Pusapati</p>
        </a>
        <div className="custom-footer__bottom">

          <p className="custom-footer__copy">© {new Date().getFullYear()} ACM SIGAI. All Rights Reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
