
import React from 'react';

const TestimonialItem = ({ rating, description, authorImg, authorName, authorTitle }) => {
  return (
    <div className="ep-testimonial__item position-relative">
      <div className="ep-testimonial__rattings">
        <ul>
          {Array.from({ length: 5 }, (_, index) => (
            <li key={index}>
              <i className={`icofont-star ${index < rating ? '' : 'off-color'}`}></i>
            </li>
          ))}
        </ul>
      </div>
      <p className="ep-testimonial__desc">{description}</p>
      <div className="ep-testimonial__author">
        <div className="ep-testimonial__author-img">
          <img src={authorImg} alt="author-img" />
        </div>
        <div className="ep-testimonial__author-info">
          <h5>{authorName}</h5>
          <p>{authorTitle}</p>
        </div>
      </div>
      <div className="ep-testimonial__shape">
        <img src="assets/images/testimonial/testimonial-1/dot-shape.svg" alt="dot-pattern" />
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      rating: 4,
      description:
        'Their product exceeded my daily design routine expectations. The quality and attention to detail were outstanding and it has become essential.',
      authorImg: 'assets/images/testimonial/testimonial-1/author-1.png',
      authorName: 'Edward Ramirez',
      authorTitle: 'CEO Of Google',
    },
    {
      rating: 4,
      description:
        'Their product exceeded my daily design routine expectations. The quality and attention to detail were outstanding and it has become essential.',
      authorImg: 'assets/images/testimonial/testimonial-1/author-2.png',
      authorName: 'Edward Ramirez',
      authorTitle: 'CEO Of Google',
    },
    {
      rating: 4,
      description:
        'Their product exceeded my daily design routine expectations. The quality and attention to detail were outstanding and it has become essential.',
      authorImg: 'assets/images/testimonial/testimonial-1/author-1.png',
      authorName: 'Edward Ramirez',
      authorTitle: 'CEO Of Google',
    },
    {
      rating: 4,
      description:
        'Their product exceeded my daily design routine expectations. The quality and attention to detail were outstanding and it has become essential.',
      authorImg: 'assets/images/testimonial/testimonial-1/author-2.png',
      authorName: 'Edward Ramirez',
      authorTitle: 'CEO Of Google',
    },
  ];

  return (
    <section className="ep-testimonial section-gap">
      <div className="ep-container container">
        <div className="row">
          <div className="col-12">
            <div className="owl-carousel ep-testimonial__slider">
              {testimonials.map((testimonial, index) => (
                <TestimonialItem key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
