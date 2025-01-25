import React from 'react';
import EventCard from './EventCard';

const EventList = () => {
   
    const events = [
        {
            mode: 'Online',
            image: 'assets/images/event/event-1/2.png',
            date: { day: 9, month: 'Oct' },
            location: 'Google Meet',
            title: 'Placement Talk',
            description: 'An insightful Placement talk co-hosted by ACM SIGAI'
        },
        {
            mode: 'Offline',
            image: 'assets/images/event/event-1/3.png',
            date: { day: 4, month: 'Oct' },
            location: 'IMAC LAB, SRMIST, KTR',
            title: 'Inauguration Event',
            description: 'Inaguration of ACM SIGAI student chapter'
        },
        {
            mode: 'Online',
            image: 'assets/images/events/hackerrank.jpeg',
            date: { day: 4, month: 'Jan' },
            location: 'HackerRank Platform',
            className:'zoomed-out',
            title: 'HackerRank Contest',
            description: 'A hands-on coding sprint focused on Arrays and Strings. Join the contest at https://www.hackerrank.com/foundations-of-cse-coding-sprint from 6:00 PM to 9:00 PM.'
        },
        {
            mode: 'Online',
            image: 'assets/images/events/quizziz.jpeg',
            date: { day: 5, month: 'Jan' },
            location: 'Quizizz Platform',
            className:'zoomed-out',
            title: 'Quizizz Session',
            description: 'An interactive quiz session focused on Basic Programming Concepts. Join using the code 3171 7712 at 11:00 AM to 12:00 PM.'
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
