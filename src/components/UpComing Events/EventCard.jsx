import React from 'react';

const EventCard = ({ event }) => {
    return (
        <div className="col-lg-6 col-xl-4 col-md-6 col-12">
            <div className="ep-blog__card wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s" style={{ position: 'relative' }}>
                <span className="event-mode ep1-bg">{event.mode}</span>
                <a className="ep-blog__img">
                    <img src={event.image} alt="blog-img" />
                </a>
                <div className="ep-blog__info">
                    <div className="ep-blog__date ep1-bg">
{event.date.day} <br />
{event.date.month}
                    </div>
 <div className="ep-blog__location">
                        <i className="fi fi-rs-marker"></i>
                        <span>{event.location}</span>
                    </div>
                    <div className="ep-blog__content">
                        <a  className="ep-blog__title">
                            <h5>{event.title}</h5>
                        </a>
                        <p className="ep-blog__text">{event.description}</p>
                        <div className="ep-blog__btn">
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
