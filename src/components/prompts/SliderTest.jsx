import React, { useState } from 'react';
import './Slider.css'; 

    const Slider = ({ slides }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
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