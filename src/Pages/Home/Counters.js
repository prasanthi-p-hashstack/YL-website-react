import React, { useState } from 'react';
import './Counters.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counters = () => {
    const [counterOn, setCounterUp] = useState(false);

    const counters_data = [
        { number: 1500, text: "Happy Customers" },
        { number: 2400, text: "Machines traded" },
        { number: 100000, text: "Parts in our e-store" },
        { number: 5000, text: "People network" }
    ];

    return (
        
        <ScrollTrigger onEnter={() => setCounterUp(true)} onExit={() => setCounterUp(false)}>
            <div className="counters-container content-width">
                {counters_data.map((data, index) => (
                    <div className={`counter-single-container counter${index +1}`} key={index}>
                        <h1 className='counters-numbers'>
                            {counterOn && (
                                <CountUp start={0} end={data.number} duration={2} delay={0} />
                           
                            )}
                            {index !==2 && <span>+</span>}
                        </h1>
                        <p className='counters-text'>{data.text}</p>
                    </div>
                ))}
            </div>
        </ScrollTrigger>
    );
};

export default Counters;
