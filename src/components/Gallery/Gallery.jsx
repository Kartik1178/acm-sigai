import React, { useRef, useEffect } from "react";
import { events } from "./EventDetails";
import "./gallery.css";

const Gallery = () => {
  const carouselRef = useRef([]);

  const scrollingLeft = (index) => {
    const carousel = carouselRef.current[index];
    if (carousel) {
      carousel.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = (index) => {
    const carousel = carouselRef.current[index];
    if (carousel) {
      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: 200, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    carouselRef.current.forEach((carousel) => {
      if (!carousel) return;

      const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = carousel;
        if (scrollLeft + clientWidth >= scrollWidth + 1) {
          carousel.scrollLeft = 0;
        }
      };
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    });
  }, []);

  return (
    <section className="ep-event__details position-relative mb-4 pt-3">
      {events.map((event, index) => (
        <div key={index} className="ep-container container">
          <h1 className="m-4 mt-5">{event.eventName}</h1>
          <div className="d-flex flex-row align-items-center">
            <div
              className="pointer"
              onClick={() => {
                scrollingLeft(index);
              }}
            >
              &lsaquo;
            </div>
            <div
              className="gallery-position"
              ref={(el) => (carouselRef.current[index] = el)}
            >
              {Array.from({ length: event.imageCount }, (_, imgno) => (
                <div className="col-sm-6 col-lg-4" key={imgno}>
                  <div className="gallery-container">
                    <img
                      src={`assets/images/event/event-${event.index}/${imgno + 1}.png`}
                      className="img-fluidity"
                      alt={`${event.eventName} - Image ${imgno + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div
              className="pointer"
              onClick={() => {
                scrollRight(index);
              }}
            >
              &rsaquo;
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
