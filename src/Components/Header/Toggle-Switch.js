import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Toggle-Switch.css';

const ToggleSwitch = () => {
    const [isLeft, setIsLeft] = useState(false); // Starts with btn-front at "India"
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const handleLeftClick = () => {
        setIsLeft(true);
        setTimeout(() => {
            window.location.href = ''; // Add the URL here for Middle East
        }, 500);
    };

    return (
        <div className="form-box">
            <div className="button-box-front">
                <div
                    id="btn-front"
                    style={{
                        left: isLeft ? '0px' : '150px',
                        width: isLeft ? '150px' : '100px',
                        backgroundColor: isLeft
                            ? isHomePage ? '#5F6567' : '#8C9DA3D9'
                            : isHomePage ? '#e6e7e7' : '#8C9DA3D9',
                    }}
                ></div>
                <button
                    type="button"
                    className="toggle-btn1-front"
                    onClick={handleLeftClick}
                    style={{
                        color: isLeft ? '#ffffff' : '#051B23',
                        backgroundColor: isLeft
                            ? isHomePage ? '#5F6567' : '#8C9DA3D9'
                            : 'transparent',
                    }}
                >
                    <img
                        src="https://test.yantralive.com/wp-content/uploads/2024/08/image-45.png"
                        alt="Middle East Flag"
                        width="19"
                        height="9"
                    />
                    MIDDLE EAST
                </button>
                <button
                    type="button"
                    className="toggle-btn2-front"
                    style={{
                        color: isLeft ? '#051B23' : '#ffffff',
                        backgroundColor: isLeft
                            ? 'transparent'
                            : isHomePage ? '#e6e7e7' : '#8C9DA3D9',
                    }}
                >
                    <img
                        src="https://test.yantralive.com/wp-content/uploads/2024/08/image-43.png"
                        alt="India Flag"
                        width="19"
                        height="9"
                    />
                    INDIA
                </button>
            </div>
        </div>
    );
};

export default ToggleSwitch;
