import React, { useRef } from "react";
import './Half-Image-Caurosel.css';

const HalfImageCarousel = ({ images }) => {
    const carouselRef = useRef(null); // Reference to the carousel container

    const handleLeftArrow = () => {
        if (carouselRef.current) {
            // Scroll to the left by the width of the first image plus margin
            const scrollAmount = carouselRef.current.scrollWidth / images.length + 40; // 40px margin
            carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const handleRightArrow = () => {
        if (carouselRef.current) {
            // Scroll to the right by the width of the first image plus margin
            const scrollAmount = carouselRef.current.scrollWidth / images.length + 40; // 40px margin
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="half-image-caurosel-container content-width">
            <div className="carousel-arrows">
                <img src="./Images/left-arrow.png" onClick={handleLeftArrow} alt="left-arrow" className="left-arrow"/>
                <img src="./Images/right-arrow.png" onClick={handleRightArrow} alt="right-arrow" className="right-arrow" />
            </div>

            <div className="half-caurosel-container" ref={carouselRef}>
                {images.map((data, index) => (
                    <img
                        key={index}
                        src={data}
                        alt={`half-image-caurosel-${index}`}
                        className="half-image-caurosel-images"
                    />
                ))}
            </div>
        </div>
    );
}

export default HalfImageCarousel;
