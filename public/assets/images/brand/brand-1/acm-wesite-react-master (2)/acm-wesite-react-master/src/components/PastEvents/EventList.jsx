import React from 'react';
import EventCard from './EventCard';

const EventList = () => {
   
    const events = [
        {
            mode: 'Offline',
            image: 'assets/images/blog/blog-1/2.png',
            date: { day: 25, month: 'Dec' },
            location: 'Mirpur Bangladesh',
            title: 'Introduction to Psychology',
            description: 'Education is the key to stude Unlock your horizons education'
        },
        {
            mode: 'Online',
            image: 'assets/images/blog/blog-1/3.png',
            date: { day: 25, month: 'Dec' },
            location: 'Mirpur Bangladesh',
            title: 'Principles of Economics',
            description: 'Education is the key to stude Unlock your horizons education'
        },
        {
            mode: 'Online',
            image: 'assets/images/blog/blog-1/1.png',
            date: { day: 25, month: 'Dec' },
            location: 'Mirpur Bangladesh',
            title: 'Education Foundation',
            description: 'Education is the key to stude Unlock your horizons education'
        },
       
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
