import React, { useState } from 'react';
import './Slider.css'; 

function Slider() {

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
    };

export default Slider;