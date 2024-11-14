import React, {useState} from "react";
import './Festivals-Gallery.css';

const FestivalsGallery = ({onClose, images}) =>{
    const [currentIndex, setCurrentIndex]= useState(0);



   

  const handleLeftArrow = () =>{
    const newIndex = currentIndex === 0 ? images.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const handleRightArrow =() =>{
    const newIndex = currentIndex === images.length-1 ? 0 :currentIndex +1;
    setCurrentIndex(newIndex);
  }

    return <div className="festivals-gallery-container-popup-overlay">
        <div className="festivals-gallery-container-popup-content content-width">
            <button className="gallery-close-button" onClick={onClose}>X</button>
            <div className="festivals-gallery-content ">
                <img src ={images[currentIndex]} alt="gallery-slider" />                
          </div>
          <div className="carousel-arrows testimonials">
                        <img src="./Images/left-arrow.png" onClick={handleLeftArrow} alt="left-arrow" />
                        <img src="./Images/right-arrow.png" onClick={handleRightArrow} alt="right-arrow" />
                </div>

        </div>
    </div>
}
export default FestivalsGallery;