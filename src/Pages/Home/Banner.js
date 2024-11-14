// RotatingText.js
import React, { useEffect, useState } from 'react';
import './Banner.css';

const BannerAnimation = () => {
    const bannerImage = './Images/banner-Home.webp';
    const [currentIndex, setCurrentIndex] = useState(0);

    const bannerBackgroundStyles = () => ({
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    });

    useEffect(() => {
        const $svgs = document.querySelectorAll(".svg-container");

        const showNextSVG = () => {
            // Remove active state from all SVGs
            $svgs.forEach((svg) => svg.classList.remove("active"));
            // Add active class to the current SVG
            $svgs[currentIndex].classList.add("active");

            const newIndex = (currentIndex + 1) % $svgs.length;
            setCurrentIndex(newIndex);
        };

        const rotationInterval = setInterval(showNextSVG, 2800); // Match the timing with text animation

        return () => clearInterval(rotationInterval);
    }, [currentIndex]);

    return (
        <div className="outer-line" style={bannerBackgroundStyles()}>
            <p className="text-stable">
                Heavy Equipment<br /> Ownership Simplified for
            </p>

            <div className="inner-text">
                <span className="text-rotate">
                    <span>Infra firm</span><br />
                    <span>Contractors</span><br />
                    <span>Workshop operators</span><br />
                    <span>Retailers</span><br />
                    <span>Fleet Owners</span><br />
                    <span>You</span>
                    <img
                        src="./Images/Home/text-vector.png"
                        alt="Descriptive Text"
                        className="animated-image"
                    />
                </span>
            </div>

            {/* Shape images */}
            <div className="image-container">
                <div className="svg-wrapper">
                    <div className="svg-container active" id="svg1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1378 143" fill="none">
                            <path d="M1142 0L0 142.5H1378L1142 0Z" fill="#FFC629" fillOpacity="0.6" />
                        </svg>
                    </div>
                    <div className="svg-container" id="svg2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1378 143" fill="none">
                            <path d="M236 0L1378 142.5H0L236 0Z" fill="#FFC629" fillOpacity="0.6" />
                        </svg>
                    </div>
                    <div className="svg-container" id="svg3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1378 143" fill="none">
                            <path d="M658 0L1378 142.5H0L658 0Z" fill="#FFC629" fillOpacity="0.6" />
                        </svg>
                    </div>
                    <div className="svg-container" id="svg4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1378 143" fill="none">
                            <path d="M1142 0L0 142.5H1378L1142 0Z" fill="#FFC629" fillOpacity="0.6" />
                        </svg>
                    </div>
                    <div className="svg-container" id="svg5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1378 143" fill="none">
                            <path d="M236 0L1378 142.5H0L236 0Z" fill="#FFC629" fillOpacity="0.6" />
                        </svg>
                    </div>
                    <div className="svg-container" id="svg6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1378 143" fill="none">
                            <path d="M658 0L1378 142.5H0L658 0Z" fill="#FFC629" fillOpacity="0.6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerAnimation;
