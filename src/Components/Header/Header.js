import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';  // Import useLocation hook
import './Header.css';
import ToggleSwitch from './Toggle-Switch';
import MobileHeader from './Mobile-Header';

const Header = () => {
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    const location = useLocation();  // Get the current location
    const navigate = useNavigate();
    const [menu, setMenu] = useState("equipment");
    const [isMobileMenuOpen, setisMObileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const isHomePage = location.pathname === '/';
  

   
    const toggleSearchBar = () => {
        setIsSearchBarVisible(!isSearchBarVisible);
    };

    const navMenuColorChange = {
        color: isHomePage ? '#ffffff' : '#1D4452'
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    // Scrolling down
                    setIsSticky(false);
                } else {
                    // Scrolling up
                    setIsSticky(true);
                }
            } else {
                setIsSticky(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

     // Check if the current path is '/login'
     if (location.pathname === '/login') {
        return null;  // Don't render the Header on the login page
    }

    return (
        <div className={`header-container ${isHomePage ? 'header-container-home' : 'header-container-default'}`}>
            <div className="container-for-search-toggle-switch content-width">
                <div className="search-bar-container">
                    {isSearchBarVisible && (
                        <input
                            type="text"
                            className={`search-input ${isSearchBarVisible ? 'active' : ''}`}
                            placeholder="Search..."
                        />
                    )}
                    <img
                        src={isHomePage ? "./Images/front-search-bar.png" : "./Images/search-icon.png"}
                        alt="search-icon"
                        className="header-search-icon"
                        onClick={toggleSearchBar}
                    />
                </div>
                <img
                    src={isHomePage ? "./Images/front-login.png" : "./Images/login-icon.png"}
                    alt="login-icon"
                    className="header-login-icon"
                    onClick={() => navigate('/login')}  // Just an example
                />
                <ToggleSwitch />
            </div>

            <div className="container-for-logo-navbar content-width">
                <div className='header-logo'>
                    <img className="header-logo-img" 
                    src={isHomePage ? "./Images/footer-logo.png" : "./Images/web-logo.png"} 
                    alt="header-logo" 
                    onClick={()=>navigate('/')}
                    />
                </div>
                <ul className="header-nav-menu">
                    <li onClick={() => { setMenu("equipment") }}>
                        <Link className='header-nav-link' to="/equipment" style={navMenuColorChange}>EQUIPMENT</Link>
                        {menu === "equipment" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("parts") }}>
                        <Link className='header-nav-link' to="/parts" style={navMenuColorChange}>PARTS</Link>
                        {menu === "parts" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("fleet") }}>
                        <Link className='header-nav-link' to="/fleet" style={navMenuColorChange}>FLEET</Link>
                        {menu === "fleet" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("about") }}>
                        <Link className='header-nav-link' to="/about" style={navMenuColorChange}>ABOUT</Link>
                        {menu === "about" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("heavy-weight") }}>
                        <Link className='header-nav-link' to="/heavy-weight" style={navMenuColorChange}>HEAVY WEIGHT</Link>
                        {menu === "heavy-weight" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("careers") }}>
                        <Link className='header-nav-link' to="/careers" style={navMenuColorChange}>CAREERS</Link>
                        {menu === "careers" ? <hr /> : <></>}
                    </li>
                </ul>
                <div className='header-for-mob-search-login-menu-icons'>
                    <div className="search-bar-container-mob ">
                        {isSearchBarVisible && (
                            <input
                                type="text"
                                className={`search-input ${isSearchBarVisible ? 'active' : ''}`}
                                placeholder="Search..."
                            />
                        )}
                        <img
                            src={isHomePage ? "./Images/front-search-bar.png" : "./Images/search-icon.png"}
                            alt="search-icon"
                            className="header-search-icon"
                            onClick={toggleSearchBar}
                        />
                    </div>
                    <img
                        src={isHomePage ? "./Images/front-login.png" : "./Images/login-icon.png"}
                        alt="login-icon"
                        className="header-login-icon-mob"
                        onClick={() => navigate('/login')}
                    />
                    <img
                        src={isHomePage ? "./Images/menu-icon-front.png" : "./Images/menu -icon.png"}
                        alt="menu-icon"
                        className="header-menu-icon-mob"
                        onClick={() => setisMObileMenuOpen(true)}
                    />
                </div>
                <div className='header-enquire-form'>
                    <a href=''
                        alt='header-enquire-button-link'
                        className='header-enquire-button-link'
                        onClick={()=>navigate('/enquire-form')}
                    >ENQUIRE
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                </div>

                {/* Mobile Menu Popup */}
                {isMobileMenuOpen &&
                    <div className='mobile-menu-overlay' onClick={() => setisMObileMenuOpen(false)}>
                        <div className='mobile-menu-content' onClick={(e) => e.stopPropagation()}>
                            <MobileHeader onClose={() => setisMObileMenuOpen(false)} />

                        </div>
                    </div>
                }


                {/* sticky header section */}

            </div>
            {isHomePage ? <hr className='homepage-header-divider'/> : ''}
            {isSticky &&
                <div className='sticky-header' style={{ backgroundColor: '#FFFFFF', position: 'fixed', top: 0, width: '100%', zIndex: 100, boxShadow: '0px 4px 4px 0px #00000012' }}>
                    <div className="container-for-logo-navbar content-width" style={{ backgroundColor: '#FFFFFF' }}>
                        <div className='header-logo'>
                            <img className="header-logo-img" 
                                src="./Images/web-logo.png" alt="header-logo"
                                onClick={()=>navigate('/')}
                            />
                        </div>
                        <ul className="header-nav-menu">
                            <li onClick={() => { setMenu("equipment") }}>
                                <Link className='header-nav-link' to="/equipment" >EQUIPMENT</Link>
                                {menu === "equipment" ? <hr /> : <></>}
                            </li>
                            <li onClick={() => { setMenu("parts") }}>
                                <Link className='header-nav-link' to="/parts">PARTS</Link>
                                {menu === "parts" ? <hr /> : <></>}
                            </li>
                            <li onClick={() => { setMenu("fleet") }}>
                                <Link className='header-nav-link' to="/fleet" >FLEET</Link>
                                {menu === "fleet" ? <hr /> : <></>}
                            </li>
                            <li onClick={() => { setMenu("about") }}>
                                <Link className='header-nav-link' to="/about" >ABOUT</Link>
                                {menu === "about" ? <hr /> : <></>}
                            </li>
                            <li onClick={() => { setMenu("heavy-weight") }}>
                                <Link className='header-nav-link' to="/heavy-weight" >HEAVY WEIGHT</Link>
                                {menu === "heavy-weight" ? <hr /> : <></>}
                            </li>
                            <li onClick={() => { setMenu("careers") }}>
                                <Link className='header-nav-link' to="/careers" >CAREERS</Link>
                                {menu === "careers" ? <hr /> : <></>}
                            </li>
                        </ul>
                        <div className='header-for-mob-search-login-menu-icons'>
                            <div className="search-bar-container-mob ">
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
                            </div>
                            <img
                                src="./Images/login-icon.png"
                                alt="login-icon"
                                className="header-login-icon-mob"
                                onClick={() => navigate('/login')}
                            />
                            <img
                                src="./Images/menu -icon.png"
                                alt="menu-icon"
                                className="header-menu-icon-mob"
                                onClick={() => setisMObileMenuOpen(true)}
                            />
                        </div>
                        <div className='header-enquire-form'>
                            <a href=''
                                alt='header-enquire-button-link'
                                className='header-enquire-button-link'
                            >ENQUIRE
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            }
        </div>

    );
};

export default Header;
