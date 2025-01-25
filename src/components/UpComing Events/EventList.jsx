import React from 'react';
import EventCard from './EventCard';

const EventList = () => {
   
    const events = [
        {
            mode: 'Online',
            image: 'assets/images/blog/blog-1/2.png',
            date: { day: 12, month: 'Nov' },
            location: 'SRMIST,KTR',
            title: 'CogniHack1.0',
            description: 'CogniHack1.0 is an ideathon event conducted by ACM SIGAI.'
        }
       
    ];

    return (
        <section className="event-area">
            <div className="container">
                <div className="row">
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventList;
