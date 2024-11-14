import React, { useState, useEffect } from "react";
import './Full-Width-Carousel.css';

const FullWidthCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

   const handleLeftArrow = ()=>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length -1 : currentIndex -1
        setCurrentIndex(newIndex)
   }
   const handleRightArrow =()=>{
        const isLastSlide = currentIndex === images.length-1;
        const newIndex = isLastSlide ? 0 :currentIndex +1;
        setCurrentIndex(newIndex);
   }
    // Function to determine styles based on screen width
    const getCarouselStyles = () => {
        const isMobile = window.innerWidth <= 767;

        return {
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: isMobile ? 'contain' : 'cover', // Change size for mobile
            backgroundPosition: 'top center', // Set position to top center
            height: isMobile ? '300px' : '600px', // Adjust height for mobile
            backgroundRepeat: 'no-repeat',
        };
    };
    return (
        <div className="full-width-caurosel-outer-container">
        <img src="./Images/buy-sell-vector1.png" alt="vector" className="background-vector1" />
        <div className="fullwidth-carousel-container">
             <div className="carousel-arrows">
             <img src="./Images/left-arrow.png" onClick={handleLeftArrow} alt="left-arrow" className="left-arrow"/>
             <img src="./Images/right-arrow.png" onClick={handleRightArrow} alt="right-arrow" className="right-arrow" />
            </div>
            
            
            <div
                className="fullwidth-carousel"
                style={getCarouselStyles()}
            ></div>
        </div>
        </div>
    );
};

export default FullWidthCarousel; 