import React, { useEffect, useRef, useState } from 'react';
import useGalleryVisibility from '../hooks/useGalleryVisibility';
import './GallerySection.css';

const GallerySection = ({ title, images }) => {
  const { visibleCount, loadMore, showLess } = useGalleryVisibility(4, 12);
  const gridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <div className="gallery-section">
      <h2>{title}</h2>
      <div
        ref={gridRef}
        className={`photo-grid ${isVisible ? 'animate-background' : ''}`}
      >
        {images.slice(0, visibleCount).map((img, index) => (
          <div className="photo-card" key={index}>
            <img src={img.src} alt={`Work ${index + 1}`} />
          </div>
        ))}
      </div>

      {visibleCount < images.length ? (
        <button className="load-more-btn" onClick={loadMore}>
          Load More
        </button>
      ) : (
        <button className="show-less-btn" onClick={showLess}>
          Show Less
        </button>
      )}
    </div>
  );
};

export default GallerySection;
