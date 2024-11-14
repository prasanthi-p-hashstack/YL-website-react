import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ToggleSwitch from './Toggle-Switch';
import './Mobile-header.css';

const MobileHeader = ({ onClose }) => {
    const navigate = useNavigate();
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    const [selectMenu, setSelectMenu] = useState('');

    const toggleSearchBar = () => {
        setIsSearchBarVisible(!isSearchBarVisible);
    };

    return (
        <div className='mobile-menu-popup-overlay'>
            <div className='mobile-menu-popup-content'>
                <div className='mobile-menu-popup-logo-container'>
                    <img src='./Images/web-logo.png' alt='web-logo' 
                            className='mobile-logo' 
                            onClick={()=>navigate('/')}
                            />

                    <div className="search-bar-container-mob-popup">
                        {isSearchBarVisible && (
                            <input
                                type="text"
                                className={`search-input ${isSearchBarVisible ? 'active' : ''}`}
                                placeholder="Search..."
                            />
                        )}
                        <img
                            src="./Images/search-icon.png"
                            alt="search-icon"
                            className="header-search-icon"
                            onClick={toggleSearchBar}
                        />
                        <img
                            src="./Images/login-icon.png"
                            alt="login-icon"
                            className="header-login-icon-mob"
                            onClick={() => navigate('/login')}
                        />
                        <img
                            src='./Images/close-button.png'
                            onClick={onClose}
                            className='mobile-menu-popup-close'
                            alt='close-button'
                        />
                    </div>
                </div>
                <hr />
                <ul className='mobile-menu-popup-navmenu-container'>
                    <li
                        onClick={() => setSelectMenu("equipment")}
                        className={selectMenu === "equipment" ? 'active-menu-item' : ''}
                    >
                        <Link className='header-nav-link' to="/equipment">EQUIPMENT</Link>
                    </li>
                    <li
                        onClick={() => setSelectMenu("parts")}
                        className={selectMenu === "parts" ? 'active-menu-item' : ''}
                    >
                        <Link className='header-nav-link' to="/parts">PARTS</Link>
                    </li>
                    <li
                        onClick={() => setSelectMenu("fleet")}
                        className={selectMenu === "fleet" ? 'active-menu-item' : ''}
                    >
                        <Link className='header-nav-link' to="/fleet">FLEET</Link>
                    </li>
                    <li
                        onClick={() => setSelectMenu("about")}
                        className={selectMenu === "about" ? 'active-menu-item' : ''}
                    >
                        <Link className='header-nav-link' to="/about">ABOUT</Link>
                    </li>
                    <li
                        onClick={() => setSelectMenu("heavy-weight")}
                        className={selectMenu === "heavy-weight" ? 'active-menu-item' : ''}
                    >
                        <Link className='header-nav-link' to="/heavy-weight">HEAVY WEIGHT</Link>
                    </li>
                    <li
                        onClick={() => setSelectMenu("careers")}
                        className={selectMenu === "careers" ? 'active-menu-item' : ''}
                    >
                        <Link className='header-nav-link' to="/careers">CAREERS</Link>
                    </li>
                </ul>

                {/* enquire button section */}
                <div className='header-enquire-form'>
                    <a href=''
                        alt='header-enquire-button'
                         className='header-enquire-form-button-link'
                    >ENQUIRE
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                </div>
                 <div className='mobile-toggle-switch'>     
                <ToggleSwitch/>
                </div>  
            </div>
        </div>
    );
};

export default MobileHeader;
