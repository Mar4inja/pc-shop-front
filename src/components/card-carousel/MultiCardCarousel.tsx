import React, { useState } from 'react';
import './multiCardCarousel.css';
import image1 from '../../img/pcs/3.png';
import image2 from '../../img/pcs/img_0010_8_3.png';
import image3 from '../../img/pcs/img_0013_12.png';
import image4 from '../../img/pcs/img_0016_14.png';

const MultiCardCarousel: React.FC = () => {

  // Stavokla huks
  const [activeIndex, setActiveIndex] = useState(0);

  // Slaida dati
  const slides = [
    image1,
    image2,
    image3,
    image4
  ];

  // Pāreja uz nākamo slaidu
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="carousel__background">
        {/* Fona konteineris */}
      </div>
      <div className="carousel__indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`carousel__indicator ${index === activeIndex ? 'carousel__indicator--active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="carousel__inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel__item ${index === activeIndex ? 'carousel__item--active' : ''}`}
          >
            <img src={slide} className="carousel__image" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel__control carousel__control--prev" onClick={handlePrev}>
        <span className="carousel__control-icon carousel__control-icon--prev" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel__control carousel__control--next" onClick={handleNext}>
        <span className="carousel__control-icon carousel__control-icon--next" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MultiCardCarousel;
