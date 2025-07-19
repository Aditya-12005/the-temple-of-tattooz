import React, { useEffect, useRef, useState } from 'react';
import './happyCustomer.css';
import sliderImages from '../data/sliderImages.js';

const HappyCustomer = () => {
  const sliderRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(window.innerWidth > 768 ? 5 : 1);
  const [currentIndex, setCurrentIndex] = useState(window.innerWidth > 768 ? 5 : 1);

  useEffect(() => {
    const handleResize = () => {
      const newCount = window.innerWidth > 768 ? 5 : 1;
      setVisibleCount(newCount);
      setCurrentIndex(newCount);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const extendedImages = [
    ...sliderImages.slice(-visibleCount),
    ...sliderImages,
    ...sliderImages.slice(0, visibleCount),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = sliderRef.current;
    if (!track) return;

    const slide = track.querySelector('.slider-image-wrapper');
    if (!slide) return;

    const slideWidth = slide.offsetWidth + 20; // 250px width + 10px margin left & right
    const offset = (currentIndex - Math.floor(visibleCount / 2)) * slideWidth;

    track.style.transition = 'transform 0.6s ease-in-out';
    track.style.transform = `translateX(-${offset}px)`;

    // Loop Reset
    if (currentIndex >= extendedImages.length - visibleCount) {
      setTimeout(() => {
        track.style.transition = 'none';
        setCurrentIndex(visibleCount);
      }, 600);
    }
  }, [currentIndex, extendedImages.length, visibleCount]);

  const getActiveIndex = (index) => index === currentIndex;

  return (
    <div className="image-slider-container">
      <h2>15K+ Happy Customers</h2>
      <div
        className="image-slider-track"
        ref={sliderRef}
        style={{ width: `${extendedImages.length * 270}px` }} // 250px image + 20px gap
      >
        {extendedImages.map((img, index) => (
          <div
            key={index}
            className={`slider-image-wrapper ${getActiveIndex(index) ? 'active' : ''}`}
          >
            <img src={img.src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyCustomer;
