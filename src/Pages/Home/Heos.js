import React from 'react';
import './Heos.css';

const HeosComponent = () => {
    const heosbackgroundImage = "./Images/Home/Heos-desktop.png";

    // Define the styles as a function
    const containerStyles = () => ({
        backgroundImage: `url(${heosbackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        //    width: '100%', 
        //    height: '100vh',
        //    display: 'flex', 
        //    flexDirection: 'row' 
    });

    return (<>
        <div className='heos-outer-container' style={containerStyles()}>
            <div className='heos-content-container content-width'>
                <div className='heos-left-container'>
                    <p className='heos-left-para1'>equipment ownership</p>
                    <p className='heos-left-para2'>Hassle-free ownership experience with innovative tech</p>
                </div>
                <div className='heos-right-container'>
                    <p className='heos-right-para'>Focus on your core business and leave the rest to us while still exercising complete control.</p><br />
                    <p className='heos-right-para'>Our HEOS platform is a complete Solution for equipment ownership. Buying and selling, product lifecycle, fleet management, rental management, spare parts, maintenance and service, expert consulting and advisory on your fingertips.</p>
                    <button className='heos-right-button'>learn more</button>
                </div>
            </div>            
            </div>
            <div className='heos-image-container'>
                <img src="./Images/Home/background-vetcor.png" 
                     alt='background-vector'
                     className='heos-image-background-vector'/>
                <div className='heos-image-full content-width'>
                   <img src="./Images/Home/yl-heos-image-desktop.webp" 
                        alt='heos-image'
                        /> 
                </div>
            </div>

            </>
    );
};

export default HeosComponent;
