import React from 'react';

const ContactForm = () => (
  <div className="col-lg-12 col-xl-7 col-12">
    <div className="ep-contact__form">
      <h3 className="ep-contact__form-title ep-split-text left">Get in Touch With Us</h3>
      <form>
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" id="name" name="your-name" placeholder="Name" required />
        </div>
        <div className="form-group">
          <label>Your Email</label>
          <input type="email" id="email" name="your-email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <label>Your Number</label>
          <input type="tel" id="phone" name="your-number" placeholder="Phone Number" required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" id="message" placeholder="Message here.." required></textarea>
        </div>
        <button type="submit" className="ep-btn">Send Message</button>
      </form>
    </div>
  </div>
);

export default ContactForm;
