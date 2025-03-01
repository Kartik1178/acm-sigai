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
      description: `SRM ACM SIGAI DataQuest: Data Science Basics\n
📅 Date: February 23rd, 2025 (Sunday)\n
🕚 Time: 11:00 AM - 12:00 PM\n
📌 Topic: Data Science Basics\n
🖥 Quizizz Session\n
🔑 Join Code: 6173 0600\n
\n
💡 Description:\n
Test your Data Science knowledge in this interactive Quizizz session hosted by SRM ACM SIGAI! Challenge yourself with engaging questions on Python for Data Science, data manipulation, and fundamental analytics while competing with peers in a fun, gamified learning environment.\n
\n
🎖 Participation certificates will be awarded to all participants.\n
🎯 Don’t miss out! Join us and take your first step into Data Science! 🚀`,
    },
    {
      mode: "Online",
      image: "assets/images/event/event-9/1.png",
      date: { day: 22, month: "Feb" },
      location: "SRMIST,KTR",
      title: "DataSprint",
      description: `SRM ACM SIGAI DataSprint: Python Edition\n
📅 Date: February 22nd, 2025 (Saturday)\n
🕕 Time: 6:00 PM - 9:00 PM\n
📌 Topic: Python for Data Science\n
🖥 HackerRank Challenge: Python Basics\n
🔗 Contest Link: https://www.hackerrank.com/srm-acm-sigai-datasprint-python-edition\n
\n
💡 Description:\n
Join the SRM ACM SIGAI DataSprint: Python Edition, a hands-on HackerRank contest designed to test and enhance your Python programming skills for Data Science.\n
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

