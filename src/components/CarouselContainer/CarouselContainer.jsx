import React, { useState, useEffect } from "react";
import "./Carousel.css";
import LeftArrow from "../SVGIcons/leftArrow";
import RightArrow from "../SVGIcons/rightArrow";
import BestSeller from "../SVGIcons/bestSeller";

const images = [
  "/images/img11.jpg",
  "/images/img22.jpg",
  "/images/img33.jpg",
  "/images/img44.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="top-left-icon">
        <BestSeller />
      </div>
      <div className="carousel-controls left" onClick={goToPrevious}>
        <LeftArrow />
      </div>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </div>
      <div className="carousel-controls right" onClick={goToNext}>
        <RightArrow />
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
