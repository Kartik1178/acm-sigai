import React from 'react';

const GoogleMap = () => (
  <div className="ep-contact__map">
    <div className="gmap_canvas">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7298.959613692403!2d90.36501104141328!3d23.83709017812546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c17cf9e11737%3A0x44c49aa5dd7c3f00!2sMirpur%20DOHS%20Cultural%20Center!5e0!3m2!1sen!2sbd!4v1721998237394!5m2!1sen!2sbd"
        width="1920" height="576" style={{ border: 0 }} title="Google Map"
      ></iframe>
    </div>
  </div>
);

export default GoogleMap;
