
import React from 'react';

const Gallery = () => {
  return (
    <section className="ep-event__details position-relative pt-3">
  <div className="ep-container container">
        <div className="row">
   {['1', '4', '1', '4', '1', '3', '2', '1', '4'].map((img, index) => (
 <div className="col-sm-4" key={index}>
<div className="gallery-container">
<div className="info">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, quae.
 </div>
 <img src={`assets/images/event/event-1/${img}.png`} className="img-fluid" alt="gallery" />
  </div>
   </div>
          ))}
  </div>
 </div>
 </section>
  );
};

export default Gallery;
