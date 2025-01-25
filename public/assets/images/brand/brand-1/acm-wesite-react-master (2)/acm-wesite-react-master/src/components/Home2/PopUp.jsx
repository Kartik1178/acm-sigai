import React from 'react'
import { useState } from 'react';
import './pop-up.css'
const PopUp = ({onClose}) => {
  const [subject,setSubject]=useState(''); 
  const HandleChange=(e)=>{
 setSubject(e.target.value);}
  return (
    <section className="ep-contact section-gap  position-relative  pb-5 ">
      <div className="ep-container container p-5 popup">
        <div className="row">
          <div className="col-lg-9 col-xl-7 col-12 col-md-10 mx-auto">
            <div className="ep-contact__form">
             <div className='top-row'>
              <h3 className="ep-contact__form-title ep-split-text left form-title">
                Submit Your Application.
              </h3>

              <div className='close-button' onClick={()=>onClose()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg> </div> </div>
              <form>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="your-name"
                    placeholder="Name "
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="your-email"
                    placeholder="Email "
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="your-number"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Registration Number</label>
                  <input
                    type="number"
                    id="Reg"
                    name="your-number"
                    placeholder="Registration Number"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                 <label>Select Your Subject</label>
                 <select className="form-select" value={subject}
                    onChange={HandleChange} >
                <option value="">Select your Domain</option>
                    <option value="ai">Corporate</option>
                    <option value="ml">Creatives</option>
                    <option value="ds">Women in Engineering</option>
                    <option value="web">Technical</option>
                  </select>

               
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message here.."
                    required
                  />
                </div>
                <button type="submit" className="ep-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default PopUp