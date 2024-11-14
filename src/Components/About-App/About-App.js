import React from "react";
import './About-App.css'

const AboutApp = () => {
    return (
        <div className="about-app-outer-conatiner">
            <div className="about-app-content-container content-width">
                <div className="about-app-left-container">
                    <div className="about-app-left-container-content">
                        <p className="about-app-content-heading">about this app</p>
                        <p className="about-app-content-para">One stop marketplace for Heavy Equipment</p>
                    </div>
                    <div className="about-app-left-container-content">
                        <p className="about-app-content-heading">data safety</p>
                        <p className="about-app-content-para">
                            Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region and age. The developer provided this information and may update it over time.</p>
                    </div>
                    <div className="about-app-apps-button-container-desktop">
                        <div className="about-app-apps-images">
                            <img src="./Images/Google.png" alt="google-play-store" />
                            <img src="./Images/IOS.png" alt="apple-play-store" />
                        </div>
                        <a href="" className="about-app-store-link">DOWNLOAD APP</a>
                    </div>
                </div>
                <div className="about-app-right-container">
                    <img src="./Images/about-app.png" className="about-app-right-image1" alt="about-app-1" />
                    <div className="about-app-ratings">
                        <p className="about-app-rating-number">4.3</p>
                        <img src="./Images/ratings-stars.png" alt="about-app-ratings-image" />
                    </div>
                    <img src="./Images/ratings1.png" className="about-app-right-stars-rating-lines" alt="about-app-ratings-image" />

                </div>
                <div className="about-app-store-mob">
                    <div className="about-app-apps-images">
                        <img src="./Images/Google.png" alt="google-play-store" />
                        <img src="./Images/IOS.png" alt="apple-play-store" />
                    </div>
                    <a href="" className="about-app-store-link">DOWNLOAD APP</a>
                </div>
            </div>
        </div>
    ); 

}
export default AboutApp;