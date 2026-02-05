import React, { useState, useEffect } from 'react';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="slider">
      <button className="slider-btn prev" onClick={prevSlide}>❮</button>
      
      <div className="slider-container">
        <img 
          src={images[currentIndex]} 
          alt={`banner-${currentIndex}`} 
          className="slider-img" 
        />
      </div>

      <button className="slider-btn next" onClick={nextSlide}>❯</button>
      
      {/* Amazon's signature gradient overlay */}
      <div className="slider-gradient"></div>
    </div>
  );
};

export default Slider;