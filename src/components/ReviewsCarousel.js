import React from "react";
import { Carousel } from "react-bootstrap";
import "../assets/css/ReviewsCarousel.css";

const reviews = [
  {
    name: "Alice",
    location: "UK",
    rating: "⭐⭐⭐⭐⭐",
    text: "The best language tool I've ever used!",
  },
  {
    name: "Raj",
    location: "India",
    rating: "⭐⭐⭐⭐",
    text: "Translating Hindi to English has never been easier.",
  },
  {
    name: "Marie",
    location: "France",
    rating: "⭐⭐⭐⭐⭐",
    text: "The UI is fantastic and the translations are spot-on!",
  },
  {
    name: "Klaus",
    location: "Germany",
    rating: "⭐⭐⭐⭐",
    text: "Accurate translations and great for learning German nuances.",
  },
  {
    name: "Aiko",
    location: "Japan",
    rating: "⭐⭐⭐⭐⭐",
    text: "Helped me immensely with my English studies!",
  },
  {
    name: "Emily",
    location: "Canada",
    rating: "⭐⭐⭐⭐⭐",
    text: "A lifesaver for work-related translations. Highly recommend!",
  },
  {
    name: "Mateo",
    location: "Spain",
    rating: "⭐⭐⭐⭐",
    text: "Translations are fast and reliable. Love the simplicity!",
  },
  {
    name: "Lina",
    location: "Sweden",
    rating: "⭐⭐⭐⭐⭐",
    text: "Amazing tool with an intuitive interface!",
  },
  {
    name: "Omar",
    location: "Egypt",
    rating: "⭐⭐⭐⭐⭐",
    text: "Great for Arabic to English translations. Very accurate.",
  },
  {
    name: "Sophia",
    location: "Australia",
    rating: "⭐⭐⭐⭐⭐",
    text: "Makes learning new languages so much fun!",
  },
];

const ReviewsCarousel = () => (
  <div className="reviews-carousel-container">
    <h3>What Our Users Are Saying</h3>
    <Carousel interval={5000}>
      {reviews.map((review, index) => (
        <Carousel.Item key={index}>
          <div className="review-card">
            <p>{review.text}</p>
            <h5>
              - {review.name} ({review.location})
            </h5>
            <div className="rating">{review.rating}</div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);

export default ReviewsCarousel;
