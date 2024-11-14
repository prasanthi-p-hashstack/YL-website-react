import React from "react";
import HalfImageCaurosel from "../../Components/Half-image-caurosel/Half-Image-Caurosel";
import './Fleet.css';
import AboutApp from "../../Components/About-App/About-App";
import FullWidthCarousel from "../../Components/Full-Width-Carousel/Full-Width-Carousel";




const Fleet = () => {
    const halfCauroselImages = [
        "./Images/fleet/fleet-image1.png",
        "./Images/fleet/fleet-image2.png",
        "./Images/fleet/fleet-image3.png",
        "./Images/fleet/fleet-image4.png",
        "./Images/fleet/fleet-image1.png",
        "./Images/fleet/fleet-image2.png",
        
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
                    <h1 className='buy-sell-intro-heading'>Fleet <span>Management</span></h1>
                    <div className="buy-sell-intro-content">
                        <p className="buy-sell-intro-para1">Amplify productivity of your entire fleet.</p>
                        <p className="buy-sell-intro-para12">Efficiently managed fleets can complete more tasks in less time. Route optimisation and reduced downtime for maintenance and repairs contribute to increased productivity.</p>
                    </div>
                    <div className="buy-sell-intro-button-container">
                        <div className="parts-intro-button">
                            <button>Optimise your fleet now</button>
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
                        <p className="buy-sell-content2-left-para">Hassle-free maintenance. Real-time updates.</p>
                    </div>
                    <div className="buy-sell-content2-right-container">
                        <p className="buy-sell-content2-right-para">With our automated process of overseeing and controlling, we optimise the usage, improve efficiency, reduce costs, and ensure compliance of your entire fleet.</p>
                        <p className="buy-sell-content2-right-para">Keep a check on the overall health of their machines through regular maintenance and alerts, and help prevent breakdowns.</p>
                    </div>
                </div>

                <div className="buy-sell-page-carousel2">
               <FullWidthCarousel images={FullWidthSliderImages}/>
                </div>
            </div>
        </>
    );
}

export default Fleet;
