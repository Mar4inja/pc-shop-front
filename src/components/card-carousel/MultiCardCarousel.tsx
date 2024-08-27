import React, { useState } from 'react';
import './multiCardCarousel.css';
import image1 from '../../img/pcs/3.png';
import image2 from '../../img/pcs/img_0010_8_3.png';
import image3 from '../../img/pcs/img_0013_12.png';
import image4 from '../../img/pcs/img_0016_14.png';
import andGetVRam from "../../img/andGetVRAM.png";
import plusIcon from "../../img/plus.png";
import gift from "../../img/gift.png";

const MultiCardCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGiftVisible, setIsGiftVisible] = useState(true);

  const slides = [
    {
      image: image1,
      title: 'HYPER 3000',
      specs: {
        CPU: 'AMD Ryzen 9 5900X 12x 3.70GHz So.AM4 WOF',
        GPU: 'MSI GeForce RTX 4060 Ti VENTUS 3X E 8G OC.',
        HDD: 'Kioxia Exceria G2 1 TB, SSD - 2.100 MB/s',
        OS: 'Windows 11',
        RAM: 'Kingston 64GB DDR4',
        Motherboard: 'MSI Z370 PRO',
        Price: '3.958 €'
      }
    },
    {
      image: image2,
      title: 'Raptor X1',
      specs: {
        CPU: 'Intel Core i7-12700K 12x 3.60GHz LGA 1700',
        GPU: 'ASUS ROG Strix GeForce RTX 4090 24GB',
        HDD: 'Samsung 970 EVO Plus 1TB NVMe',
        OS: 'Windows 11 Pro',
        RAM: 'Corsair Vengeance 32GB DDR5',
        Motherboard: 'Gigabyte Z790 AORUS MASTER',
        Price: '2.500 €'
      }
    },
    {
      image: image3,
      title: 'Vertex 500',
      specs: {
        CPU: 'AMD Ryzen 7 5800X 8x 3.80GHz AM4',
        GPU: 'Gigabyte GeForce RTX 4070Ti 8GB',
        HDD: 'Crucial MX500 1TB SATA SSD',
        OS: 'Windows 11 Home',
        RAM: 'G.Skill Ripjaws V 32GB DDR4',
        Motherboard: 'MSI MAG B550 TOMAHAWK',
        Price: '1.955 €'
      }
    },
    {
      image: image4,
      title: 'Titan Pro',
      specs: {
        CPU: 'Intel Core i9-13900K 24x 3.00GHz LGA 1700',
        GPU: 'MSI GeForce RTX 4090 SUPRIM X 64GB',
        HDD: 'WD Black SN850X 2TB NVMe',
        OS: 'Linux Fedora',
        RAM: 'Kingston Fury Beast 64GB DDR5',
        Motherboard: 'ASUS ROG Crosshair X670E HERO',
        Price: '6.500 €'
      }
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setIsGiftVisible(true); // Show the gift image again on slide change
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    setIsGiftVisible(true); // Show the gift image again on slide change
  };

  const handleGiftClick = () => {
    setIsGiftVisible(false); // Hide the gift image
  };

  const handleVramClick = () => {
    setIsGiftVisible(true); // Show the gift image again
  };

  return (
    <div className="carousel">
      <p className="present">Buy one of four PCs and get a Nvidia Geforce video card for FREE!</p>
      <div className="carousel__inner">
        <div className="carousel__image-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel__item ${index === activeIndex ? 'carousel__item--active' : ''}`}
            >
              <img src={slide.image} className="carousel__image" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="carousel__info">
          <h3>{slides[activeIndex].title}</h3>
          <button className="carousel_button">
            <span>Add to Cart</span><i></i>
          </button>
        </div>
      </div>
      <img className="plus__icon" src={plusIcon} alt="Plus" />
      {isGiftVisible ? (
        <img className="gift" src={gift} alt="Gift" onClick={handleGiftClick} />
      ) : (
        <img className="vram" src={andGetVRam} alt="VRAM" onClick={handleVramClick} />
      )}
      <div className="carousel__controls">
        <button className="carousel__control carousel__control--prev" onClick={handlePrev}>
          <span className="carousel__control-icon carousel__control-icon--prev" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel__control carousel__control--next" onClick={handleNext}>
          <span className="carousel__control-icon carousel__control-icon--next" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
