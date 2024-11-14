import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="spinner-overlay">
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                <circle fill='#FFC629' stroke='#FFC629' strokeWidth='5' r='5' cx='20' cy='50'>
                    <animate attributeName='cy' calcMode='spline' dur='2s' values='50;70;50;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='-.4s'></animate>
                </circle>
                <circle fill='#FFC629' stroke='#FFC629' strokeWidth='5' r='5' cx='50' cy='50'>
                    <animate attributeName='cy' calcMode='spline' dur='2s' values='50;70;50;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='-.2s'></animate>
                </circle>
                <circle fill='#FFC629' stroke='#FFC629' strokeWidth='5' r='5' cx='80' cy='50'>
                    <animate attributeName='cy' calcMode='spline' dur='2s' values='50;70;50;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='0s'></animate>
                </circle>
            </svg>
        </div>
    );
};

export default Loader;
