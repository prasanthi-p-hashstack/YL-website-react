import React, { useState, useEffect } from 'react';
import './Accordation-Buttons.css';
import AccordationButtonsMob from './Accordation-Button-Mob';

const AccordationButtons = () => {
  const [activeButton, setActiveButton] = useState('button1');
  const [buttonHeight, setButtonHeight] = useState(getButtonHeight());

  // Define the button data with their respective images and texts
  const buttons = [
    {
      id: 'button1',
      title: 'PART DISCOVERY',
      text: 'A Self Learning Digital catalogue to recommend OEM, OES and Aftermarket parts for your needs.',
      imageUrl: "./Images/Home/Accordation1.webp",
    },
    {
      id: 'button2',
      title: 'CLOUD INVENTORY',
      text: 'Cloud Inventory with Real time access to vendors pricing and stock across locations.',
      imageUrl: './Images/Home/Accordation2.webp',
    },
    {
      id: 'button3',
      title: 'ASSET FLOW',
      text: 'Automate the equipment buying and selling business process through a data analytics driven workflow backbone.',
      imageUrl: './Images/Home/Accordation3.webp',
    },
    {
      id: 'button4',
      title: 'FLEET OPTIMIZATION',
      text: 'Improve Fleet productivity with Machine learning applied to your IoT, CANBUS and Business metrics data real time.',
      imageUrl: './Images/Home/Accordation4.webp',
    },
  ];

  // Helper function to determine button height based on screen width
  function getButtonHeight() {
    return window.innerWidth < 1200 ? '70px' : '90px';
  }

  // Update button height on window resize
  useEffect(() => {
    const handleResize = () => {
      setButtonHeight(getButtonHeight());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <div className="iot-container content-width">
      <div className="button-container">
        {buttons.map((button) => (
          <div
            key={button.id}
            className={`nav-button ${activeButton === button.id ? 'nav-active' : ''}`}
            onClick={() => setActiveButton(button.id)}
            style={{
              height: activeButton === button.id ? '210px' : buttonHeight,
              transition: 'height 0.5s',
            }}
          >
            {button.title}
            <img src='./Images/Home/iot-arrow.png' className={`arrow-icon ${activeButton === button.id ? 'show' : ''}`}></img>
            {activeButton === button.id && (
              <div className="text-iot">
                <p>{button.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="imageiot">
        {buttons.map((button) => (
          <img
            key={button.id}
            src={button.imageUrl}
            alt={button.title}
            className={activeButton === button.id ? 'show' : ''}
            loading="lazy"
          />
        ))}
      </div>
    </div>
    <div className='accordation-mobile'>
        <AccordationButtonsMob/>
        </div>
    </>
  );
};

export default AccordationButtons;
