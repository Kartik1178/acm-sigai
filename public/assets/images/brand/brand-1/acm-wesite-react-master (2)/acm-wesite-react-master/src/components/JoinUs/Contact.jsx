import React from 'react';

const Contact = () => {
  return (
    <section className="ep-contact section-gap section-bg-1 position-relative pb-5">
      <div className="ep-container container">
        <div className="row">
          <div className="col-lg-9 col-xl-7 col-12 col-md-10 mx-auto">
            <div className="ep-contact__form">
              <h3 className="ep-contact__form-title ep-split-text left">
                Submit Your Application.
              </h3>
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
                  <label>Field Of Interest</label>
                  <select name="interest" id="interest" style={{ width: "100%" }} required>
                    <option value="">Select Subject</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="ml">Machine Learning</option>
                    <option value="ds">Data Science</option>
                    <option value="web">Web Development</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" id="message" placeholder="Message here.." required></textarea>
                </div>
                <button type="submit" className="ep-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
