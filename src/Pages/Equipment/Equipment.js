import React from "react";
import HalfImageCaurosel from "../../Components/Half-image-caurosel/Half-Image-Caurosel";
import './Equipment.css';
import AboutApp from "../../Components/About-App/About-App";
import FullWidthCarousel from "../../Components/Full-Width-Carousel/Full-Width-Carousel";




const Equipment = () => {
    const halfCauroselImages = [
        "./Images/buy-sell/buy-sell-half-car1.png",
        "./Images/buy-sell/buy-sell-half-car2.png",
        "./Images/buy-sell/buy-sell-half-car3.png",
        "./Images/buy-sell/buy-sell-half-car4.png",
        "./Images/buy-sell/buy-sell-half-car1.png",
        "./Images/buy-sell/buy-sell-half-car2.png"
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
                    <h1 className='buy-sell-intro-heading'>Buy & Sell <span>Equipment</span></h1>
                    <div className="buy-sell-intro-content">
                        <p className="buy-sell-intro-para1">Hassle-free buy and sell equipment.</p>
                        <p className="buy-sell-intro-para12">We are redefining heavy equipment ownership by building industry-first solutions to trade pre-owned equipment, helping owners maintain their equipment by supplying the right parts and services on time.</p>
                    </div>
                    <div className="buy-sell-intro-button-container">
                        <div className="buy-sell-intro-button">
                            <img src="./Images/IND-flag.png" alt="IND-flag" />
                            <button>buy and sell now</button>
                        </div>
                        <div className="buy-sell-intro-button">
                            <img src="./Images/UAE-flag.png" alt="UAE-flag" />
                            <button>buy and sell now</button>
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
                        <p className="buy-sell-content2-left-para">We have built the best heavy equipment platform for equipment owners.</p>
                    </div>
                    <div className="buy-sell-content2-right-container">
                        <p className="buy-sell-content2-right-para">We are redefining heavy equipment ownership by building industry-first solutions to trade pre-owned equipment, helping owners maintain them by supplying the right parts and services on time.</p>
                        <p className="buy-sell-content2-right-para">Our mission is to eliminate downtime & idle time of heavy equipment through technology-led innovations and solutions, and provide a flawless experience to our customers.</p>
                    </div>
                </div>

                <div className="buy-sell-page-carousel2">
               <FullWidthCarousel images={FullWidthSliderImages}/>
                </div>
            </div>
        </>
    );
}

export default Equipment;
