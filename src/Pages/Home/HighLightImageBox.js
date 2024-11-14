import React, { useEffect, useState } from "react";
import "./HighLightImageBox.css";

const HighlightImageBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textArray = [
    "Fuel Bills",
    "Daily Log Books",
    "Maintenance Tracking",
    "Expenses",
    "Operator Interaction",
    "One-click Invoice to Customers"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [textArray.length]);

  return (
    <div className="highlight-container">
      <div className="image-box">
        {textArray.map((text, index) => (
          <div key={index} className={`image-box${index + 1}`}>
            <p className={`text-box text-box${index + 1} ${currentIndex === index ? "highlight" : ""}`}>
              {text}
            </p>
            <img
              src={`/Images/Home/autohighlight${index + 1}.webp`}
              alt={`image_icon${index + 1}`}
              className="image-icon"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <img
        src="./Images/Home/dig-lib-image.png"
        alt="main-image"
        className="main-image"
        loading="lazy"
      />
    </div>
  );
};

export default HighlightImageBox;
