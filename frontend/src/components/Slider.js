// src/components/Slider.js
import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
    const slides = [
      { id: 1, image: '/images/image1.jpeg', caption: 'Görsel 1 Açıklaması' },
      { id: 2, image: '/images/image2.jpg', caption: 'Görsel 2 Açıklaması' },
      { id: 3, image: '/images/image3.jpg', caption: 'Görsel 3 Açıklaması' },
      { id: 3, image: '/images/image4.jpg', caption: 'Görsel 3 Açıklaması' },
    ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 saniye aralıklarla slide değişimi

    return () => clearInterval(interval); // cleanup
  }, [slides.length]); // slides.length bağımlılığını buraya ekliyoruz

  return (
    <div className="slider">
      <img src={slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`} className="slider-image" />
      <div className="caption">{slides[currentSlide].caption}</div>
    </div>
  );
}

export default Slider;
