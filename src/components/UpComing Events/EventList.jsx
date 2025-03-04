import React from "react";
import EventCard from "./EventCard";

const EventList = () => {
  const events = [
    {
      mode: "Online",
      image: "assets/images/blog/blog-1/2.png",
      date: { day: 12, month: "Nov" },
      location: "SRMIST,KTR",
      title: "CogniHack1.0",
      description: "CogniHack1.0 is an ideathon event conducted by ACM SIGAI.",
    },
    {
      mode: "Online",
      image: "assets/images/event/event-8/1.png",
      date: { day: 23, month: "Feb" },
      location: "SRMIST,KTR",
      title: "DataQuest",
      description: `Test your Data Science knowledge in this interactive Quizizz session hosted by SRM ACM SIGAI! Challenge yourself with engaging questions on Python for Data Science, data manipulation, and fundamental analytics while competing with peers in a fun, gamified learning environment.
🎖 Participation certificates will be awarded to all participants.
🎯 Don’t miss out! Join us and take your first step into Data Science! 🚀`,
    },
    {
      mode: "Online",
      image: "assets/images/event/event-9/1.png",
      date: { day: 22, month: "Feb" },
      location: "SRMIST,KTR",
      title: "DataSprint",
      description: `
Join the SRM ACM SIGAI DataSprint: Python Edition, a hands-on HackerRank contest designed to test and enhance your Python programming skills for Data Science.
🎖 Participation certificates will be provided to all participants.`,
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

