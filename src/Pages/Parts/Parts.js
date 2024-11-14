import React from "react";
import HalfImageCaurosel from "../../Components/Half-image-caurosel/Half-Image-Caurosel";
import './Parts.css';
import AboutApp from "../../Components/About-App/About-App";
import FullWidthCarousel from "../../Components/Full-Width-Carousel/Full-Width-Carousel";




const Parts = () => {
    const halfCauroselImages = [
        "./Images/parts/parts-image1.png",
        "./Images/parts/parts-image2.png",
        "./Images/parts/parts-image3.png",
        "./Images/parts/parts-image4.png",
        "./Images/parts/parts-image1.png",
        "./Images/parts/parts-image2.png",
        
    ];
    const FullWidthSliderImages=[
        "./Images/slider/slider1.JPG",
        "./Images/slider/slider2.JPG",
        "./Images/slider/slider3.JPG",
        "./Images/slider/slider4.JPG",
        "./Images/slider/slider5.JPG",
        "./Images/slider/slider6.JPG",
        "./Images/slider/slider8.JPG",
        "./Images/slider/slider9.png",
        "./Images/slider/slider10.png"
    ]

    return (
        <>
            <div className="buy-sell-page-container content-width">
                <div className="buy-sell-intro-container">
                    <h1 className='buy-sell-intro-heading'>Parts</h1>
                    <div className="buy-sell-intro-content">
                        <p className="buy-sell-intro-para1">Your trusted source for high-quality spare parts.</p>
                        <p className="buy-sell-intro-para12">Discover the difference in quality and reliability with our extensive range of spare parts, tailored to meet the demands of the toughest construction projects.</p>
                    </div>
                    <div className="buy-sell-intro-button-container">
                        <div className="parts-intro-button">
                            <button>explore our one-stop shop</button>
                        </div>
                        <div className="parts-intro-button2">
                            <button>view catalogue</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="buy-sell-half-image-caurosel">
                <HalfImageCaurosel images={halfCauroselImages} />
            </div>

            <AboutApp />

            <div className="buy-sell-page-content2-fullwidth-container">
                
                <img src="./Images/buy-sell-vector2.png" alt="vector" className="background-vector2" />

                <div className="buy-sell-content2-container content-width">
                    <div className="buy-sell-content2-left-container">
                        <p className="buy-sell-content2-left-heading">Why YantraLive</p>
                        <p className="buy-sell-content2-left-para">Your one-stop solution for top-tier spare parts catering to a wide range of heavy construction equipment</p>
                    </div>
                    <div className="parts-content2-right-container">
                        <p className="buy-sell-content2-right-para">Our passion lies in providing premium spare parts for a diverse fleet, including Excavators, Backhoe Loaders, Cranes, Loaders, and Transit Mixers. Each component is meticulously crafted to infuse your machinery with unwavering durability and precision, ensuring your projects are always at their best.</p>
                        
                    </div>
                </div>

                <div className="buy-sell-page-carousel2">
               <FullWidthCarousel images={FullWidthSliderImages}/>
                </div>
            </div>
        </>
    );
}

export default Parts;
