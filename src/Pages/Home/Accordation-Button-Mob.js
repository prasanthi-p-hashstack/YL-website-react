import React, { useState } from 'react';
import './Accordation-Button-Mob.css'

const AccordationButtonsMob = () => {
  const [activeButton, setActiveButton] = useState('buttonm1');

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const buttonsData = [
    {
      id: 'buttonm1',
      title: 'PART DISCOVERY',
      description: 'A Self Learning Digital catalogue to recommend OEM, OES and Aftermarket parts for your needs.',
      imageUrl: "./Images/Home/Accordation1.webp",
    },
    {
      id: 'buttonm2',
      title: 'CLOUD INVENTORY',
      description: 'Cloud Inventory with Real-time access to vendors pricing and stock across locations.',
      imageUrl: "./Images/Home/Accordation2.webp",
    },
    {
      id: 'buttonm3',
      title: 'ASSET FLOW',
      description: 'Automate the equipment buying and selling business process through a data analytics driven workflow backbone.',
      imageUrl: "./Images/Home/Accordation3.webp",
    },
    {
      id: 'buttonm4',
      title: 'FLEET OPTIMIZATION',
      description: 'Improve Fleet productivity with Machine learning applied to your IoT, CANBUS and Business metrics data real-time.',
      imageUrl: "./Images/Home/Accordation4.webp",
    },
  ];

  return (
    <div className="iot-container-mob content-width">
      <div className="button-container-mob">
        {buttonsData.map((button) => (
          <div
            key={button.id}
            id={button.id}
            className={`navButtonMob ${activeButton === button.id ? 'mob-active' : ''}`}
            style={{ height: activeButton === button.id ? '450px' : '80px' }}
            onClick={() => handleButtonClick(button.id)}
          >
            {button.title}
            <img src='./Images/Home/iot-arrow.png' 
            className={`arrow-icon-mob ${activeButton === button.id ? 'show' : ''}`}></img>
            {/* <i
              className="fas fa-arrow-right arrow-icon-mob"
              style={{ display: activeButton === button.id ? 'block' : 'none' }}
            /> */}
            <div
              className="textiotmob"
              style={{ display: activeButton === button.id ? 'block' : 'none' }}
            >
              <p>{button.description}</p>
            </div>
            <div className="imageiot-mob">
              <img
                src={button.imageUrl}
                alt=""
                className={`${button.id}-image`}
                loading="lazy"
                style={{ display: activeButton === button.id ? 'block' : 'none' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordationButtonsMob;
