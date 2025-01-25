import React from 'react';

const ContactInfo = () => (
  <div className="col-lg-12 col-xl-5 col-12">
    <div className="ep-contact__info">
      <div className="ep-contact__info-head">
        <span>Contact us</span>
        <h3 className="ep-split-text left">Unlocking Potential the an Through Education</h3>
      </div>
      <div className="ep-contact__info-item">
        <div className="ep-contact__info-icon"><i className="fi-ss-marker"></i></div>
        <div className="ep-contact__info-text">
          <h6>Address</h6>
          <p>Dhaka 102, 8000 sent behaibior utl <br />1216, road 45 house of street</p>
        </div>
      </div>
      <div className="ep-contact__info-item">
        <div className="ep-contact__info-icon"><i className="fi fi-sr-phone-call"></i></div>
        <div className="ep-contact__info-text">
          <h6>Lets Talk us</h6>
          <p>Phone number: <a href="tel:+32566-800-890">+32566 - 800 - 890</a><br />Fax: 1234 -58963 - 007</p>
        </div>
      </div>
      <div className="ep-contact__info-item">
        <div className="ep-contact__info-icon"><i className="fi fi-sr-envelope"></i></div>
        <div className="ep-contact__info-text">
          <h6>Send us email</h6>
          <a href="mailto:demo0023yourmailhotmail.com">demo0023yourmailhotmail.com</a><br />
          <a href="mailto:demo23yourmail.com">demo23yourmail.com</a>
        </div>
      </div>
      <div className="ep-contact__info-item d-flex justify-content-center">
        <a href="#"><div className="ep-contact__info-icon"><i className="fi fi-brands-linkedin"></i></div></a>
        <a href="#"><div className="ep-contact__info-icon"><i className="fi fi-brands-instagram"></i></div></a>
      </div>
    </div>
  </div>
);

export default ContactInfo;
