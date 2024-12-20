import React from 'react';
import EventCard from './EventCard';

const EventList = () => {
   
    const events = [
        {
            mode: 'Offline',
            image: 'assets/images/event/event-1/3.png',
            date: { day: 4, month: 'Oct 2024' },
            location: 'IMAC LAB, SRMIST, KTR',
            title: 'Inauguration Event',
            description: 'Inaguration of ACM SIGAI student chapter'
        },
        {
            mode: 'Online',
            image: 'assets/images/event/event-1/2.png',
            date: { day: 9, month: 'Oct 2024' },
            location: 'Google Meet',
            title: 'Placement Talk',
            description: 'An insightful Placement talk co-hosted by ACM SIGAI'
        },
        {
            mode: 'Online',
            image:"assets/images/event/event-2/1.png",
            date: { day: 9, month: 'Oct 2024' },
            location: 'Online',
            className:'zoomed-out',
            title: 'PLACEMENT TALK WITH MR. NILESH SINGH',
            description: 'An insightful session by Mr. Nilesh Singh, Associate Product Manager at Unilever, sharing tips and strategies to excel in campus placements and build a successful career.'
        },
        {
            mode: 'Online',
            image:"assets/images/event/event-3/2.png",
            date: { day: 12, month: 'Nov 2024' },
            location: 'Online',
            className:'zoomed-out',
            title: 'AI with Integrity',
            description: 'Ensuring Ethics in the Age of Innovation with Yukta Kulkarni (12.11.2024). A thought-provoking discussion on ethical AI practices, led by alumna Yukta Kulkarni, focusing on balancing innovation with responsibility.'
        },
        
        {
            mode: 'Online',
            image:"assets/images/event/event-5/2.png",
            date: { day: 26, month: 'Dec 2024' },
            location: 'Online',
            className:'zoomed-out',
            title: 'No Code? No Problem! ',
            description: 'Attention is All You Need with Mr. Vikash PR (26.12.2024). A hands-on session exploring the power of no-code tools and the role of transformer models in simplifying AI development, presented by Mr. Vikash PR.'
        },
        {
            mode: 'Online',
            image: 'assets/images/events/hackerrank.jpeg',
            date: { day: 4, month: 'Jan 2025' },
            location: 'HackerRank Platform',
            className:'zoomed-out',
            title: 'HackerRank Contest',
            description: 'A hands-on coding sprint focused on Arrays and Strings. Join the contest at https://www.hackerrank.com/foundations-of-cse-coding-sprint from 6:00 PM to 9:00 PM.'
        },
        {
            mode: 'Online',
            image:"assets/images/event/event-4/1.png",
            date: { day: 4, month: 'Jan 2025' },
            location: 'Online',
            className:'zoomed-out',
            title: 'CodeSprint Coding Contest',
            description:'A thrilling competitive programming contest designed to challenge problem-solving skills and coding efficiency.'
        },
        {
            mode: 'Online',
            image: 'assets/images/events/quizziz.jpeg',
            date: { day: 5, month: 'Jan 2024' },
            location: 'Quizizz Platform',
            className:'zoomed-out',
            title: 'Quizizz Session',
            description: 'An interactive quiz session focused on Basic Programming Concepts. Join using the code 3171 7712 at 11:00 AM to 12:00 PM.'
        },
        
      
        {
            mode: 'Online',
            image:"assets/images/event/event-6/1.png",
            date: { day: 5, month: 'Jan 2025' },
            location: 'Online',
            className:'zoomed-out',
            title: 'Concept Quest Quiz Session ',
            description:'A fun and interactive quiz testing participants’ knowledge of computer science concepts and tech trends.'
        },
           
        {
            mode: 'Online',
            image:"assets/images/event/event-7/1.png",
            date: { day: 28, month: 'Jan 2025' },
            location: 'Online',
            className:'zoomed-out',
            title: 'The Evolution and Future of AI',
            description:'A captivating session led by Pranav Malakar, SRM alumnus and Software Engineer at Dell Technologies, exploring the journey of artificial intelligence, its current advancements, and its transformative future in industries and society.'
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
