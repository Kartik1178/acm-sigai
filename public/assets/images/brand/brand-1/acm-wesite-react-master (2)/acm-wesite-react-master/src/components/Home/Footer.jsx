import React from 'react'

const Footer = () => {
  return (
<footer class="ep-footer position-relative">
        <div class="ep-container container">
          <div class="ep-footer__top">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-12">
                <div class="ep-footer__widget footer-about">
                  <div class="ep-footer__logo">
                    <a href="index.html">
                      <img src="assets/images/brand/acm_logo.png" alt="footer-logo" />
                    </a>
                  </div>
                  <p class="ep-footer__text">
                    It is a long established fact that a reader will be
                    distracted
                  </p>
                  <div class="ep-footer__contact">
                    <div class="ep-footer__contact-single">
                      <div class="ep-footer__contact-icon">
                        <i class="fi fi-rs-marker"></i>
                      </div>
                      <div class="ep-footer__contact-info">
                        <p>Address</p>
                        <span>66 Broklyant, New York India</span>
                      </div>
                    </div>
                    <div class="ep-footer__contact-single">
                      <div class="ep-footer__contact-icon">
                        <i class="fi fi-rr-phone-call"></i>
                      </div>
                      <div class="ep-footer__contact-info">
                        <p>Phone Number</p>
                        <a href="tel:012 345 678 9101">012 345 678 9101</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-4 col-12">
                <div class="ep-footer__widget footer-links">
                  <h4 class="ep-footer__widget-title">Quick Links</h4>
                  <ul class="ep-footer__links-list">
                    <li>
                      <a href="upcoming-events.html">Upcoming Events</a>
                    </li>
                    <li>
                      <a href="blog.html">Blogs</a>
                    </li>
                    <li>
                      <a href="gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a href="join-us.html">About Us</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-12">
                <div class="ep-footer__widget footer-newsletter">
                  <h4 class="ep-footer__widget-title">Newsletter</h4>
                  <form action="#" method="post" class="ep-footer__newsletter">
                    <input type="email" name="email" placeholder="Your e-mail" required />
                    <button type="submit">
                      <i class="fi fi-ss-paper-plane"></i>
                    </button>
                  </form>
                  <div class="ep-footer__social">
                    <h5 class="ep-footer__social-title">Follow Us</h5>
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
        <div class="ep-footer__pattern">
          <img src="assets/images/footer/footer-pattern.png" alt="footer-pattern" />
        </div>
      </footer>
    
  )
}

export default Footer