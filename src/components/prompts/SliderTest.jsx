import React, { useState } from 'react';
import './Slider.css'; 

    const Slider = ({ slides }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
      };

    return (
        <div className="slider-container">
            <button  className="ant-boton">
                ant
            </button>
            <div className="slider">
                <div className="slide-container">

                </div>
            </div>
            <button  className="sig-boton">
                sig
            </button>
      </div>
        );
   

export default Slider;