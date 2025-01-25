import React from 'react';

const UpcomingEvents = () => {
  return (
    <>
      <div className="ep-video">
        <div className="ep-container container">
          <div
            className="ep-video__bg background-image ep-hobble position-relative"
            style={{
              backgroundImage: "url('assets/images/video/video-1/bg.jpg')",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=gyGsPlt06bo"
              className="ep-video__btn popup-video ep-hover-layer-2"
            >
              <i className="fi fi-sr-play"></i>
            </a>
          </div>
        </div>
      </div>
      <section className="ep-blog section-gap position-relative">
        <div className="ep-blog__shape-1 rotate-ani">
          <img
            src="assets/images/blog/blog-1/shape-1.svg"
            alt="shape-1"
          />
        </div>
        <div className="ep-blog__shape-2 updown-ani">
          <img
            src="assets/images/blog/blog-1/shape-2.svg"
            alt="shape-2"
          />
        </div>
        <div className="ep-container container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-6 col-md-8 col-12">
              <div className="ep-section-head text-center">
                <span className="ep-section-head__sm-title ep2-color">Up coming Events</span>
                <h3 className="ep-section-head__big-title ep-split-text left">
                  Read Our Latest <span>Events</span> <br />Posts Discover
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Event Cards */}
            <div className="col-lg-6 col-xl-4 col-md-6 col-12">
              <EventCard
                delay=".3s"
                eventMode="Online"
                imgSrc="assets/images/blog/blog-1/1.png"
                date="25 Dec"
                location="Mirpur Bangladesh"
                title="Education foundation"
                description="Education is the key to stude Unlock your horizons education"
              />
            </div>
            <div className="col-lg-6 col-xl-4 col-md-6 col-12">
              <EventCard
                delay=".5s"
                eventMode="Offline"
                imgSrc="assets/images/blog/blog-1/2.png"
                date="25 Dec"
                location="Mirpur Bangladesh"
                title="Introduction to Psychology"
                description="Education is the key to stude Unlock your horizons education"
              />
            </div>
            <div className="col-lg-6 col-xl-4 col-md-6 col-12">
              <EventCard
                delay=".7s"
                eventMode="Online"
                imgSrc="assets/images/blog/blog-1/3.png"
                date="25 Dec"
                location="Mirpur Bangladesh"
                title="Principles of Economics"
                description="Education is the key to stude Unlock your horizons education"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const EventCard = ({ delay, eventMode, imgSrc, date, location, title, description }) => {
  return (
    <div
      className="ep-blog__card wow fadeInUp"
      data-wow-delay={delay}
      data-wow-duration="1s"
      style={{ position: "relative" }}
    >
      <span className="event-mode ep1-bg">{eventMode}</span>
      <a href="event-details.html" className="ep-blog__img">
        <img src={imgSrc} alt="blog-img" />
      </a>
      <div className="ep-blog__info">
        <div className="ep-blog__date ep1-bg">
          {date.split(' ')[0]} <br />
          {date.split(' ')[1]}
        </div>
        <div className="ep-blog__location">
          <i className="fi fi-rs-marker"></i>
          <span>{location}</span>
        </div>
        <div className="ep-blog__content">
          <a href="event-details.html" className="ep-blog__title">
            <h5>{title}</h5>
          </a>
          <p className="ep-blog__text">{description}</p>
          <div className="ep-blog__btn">
            <a href="event-details.html">
              Read More
              <i className="fi fi-rs-arrow-small-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
