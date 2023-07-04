import React, { useEffect, useRef } from 'react'
import CarousalStyle from './styles/Carousal.module.css'

import img1 from "./../imgs/1.jpg";
import img2 from "./../imgs/2.jpg";
import img3 from "./../imgs/3.jpg";
import img4 from "./../imgs/4.jpg";
import img5 from "./../imgs/5.jpg";
import img6 from "./../imgs/6.jpg";
import img7 from "./../imgs/7.jpg";

const Carousal = () => {

    const images = [img1, img2, img3, img4, img5, img6, img7]

    return (
        <div>
            <div className={CarousalStyle.Carousal} id='carousal'>
                {images.map((item, index) => { 
                    return (
                        <img key={index} src={item} style={{height: "100%"}}></img>
                    )
                 })}
            </div>
            <div>
                <span className="placeholder"></span>
                <span className="placeholder"></span>
                <span className="placeholder"></span>
                <span className="placeholder"></span>
                <span className="placeholder"></span>
                <span className="placeholder"></span>
                <span className="placeholder"></span>
                <span className="pointer"></span>
            </div>
        </div>
    )
}

export default Carousal