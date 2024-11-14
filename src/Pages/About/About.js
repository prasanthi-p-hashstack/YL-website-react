import React, { useState } from "react";
import "./About.css";

const About = () => {
    // State to track which card is flipped
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleFlipAction = (index) => {
        setFlippedIndex(flippedIndex === index ? null : index);
    }

    const teamMembers = [
        {
            name: "Ravi Rao",
            img: "./Images/about/about-profile1.png",
            backContent: "Serial Entrepreneur Successfully exited smart Retail, Founded Capstone Life Real Estate, and Mygubbi Interior Solutions. Ex – Infosys, Accenture. PhD – IIM-B and B.E – NITK"
        },
        {
            name: "Vikram Joshi",
            img: "./Images/about/about-profile2.png",
            backContent: "25+ years of experience. Ex-Chief Automation Officer at Soroco. Past – Soroco, Accenture, InfosysB.E. – NIT- Trich"
        },
        {
            name: "Sumit Bhosale",
            img: "./Images/about/about-profile3.png", 
            backContent: "8+ years of experience in the Real Estate and Home Interior BusinessFounding team member of Mygubbi and Lynx Ex – PurvankaraB.E and MBA (IIM-K)"
        },
        {
            name: "Avinash Sangurmath",
            img: "./Images/about/about-profile4.png",
            backContent: "15+ years of experienceEx -JP Morgan, Accenture & MindtreeB.Tech – Bengaluru University"
        }, 
        {
            name: "Ajay Anand",
            img: "./Images/about/about-profile5.png",
            backContent: "30+ years of experience in Digital Transformation, Business Development & Intellectual property creation.Ex- Board Member & Global head (Analytics & Data Practice) – DXC, InfosysBE NIT, Surathkal"
        }
    ];

    return (
        <div className="about-full-page-container">
            {/* Company Overview Section */}
            <div className="about-page-intro-text-container content-width">
                <h1 className='buy-sell-intro-heading'>Company <span>Overview</span></h1>
                <div className="about-page-intro-content">
                    <p className="about-page-intro-content-para1">YantraLive is an Asia-based B2B platform for Heavy Equipment Owners. We are redefining heavy equipment ownership by building industry-first solutions to trade pre-owned equipment, helping owners maintain their equipment by supplying the right parts and services on time. YantraLive was conceived in 2018 in response to the inefficiencies observed in the Heavy Equipment Ownership throughout its lifecycle.</p>
                    <p className="about-page-intro-content-para2">Our mission is to Eliminate Downtime & Idle time of Heavy Equipment through technology-led Innovations and build an ecosystem for heavy equipment related solutions.</p>
                </div>
            </div>

            {/* Brand Values Section */}
            <div className="about-page-brand-values-outer-container">
                <div className="about-page-brand-values-container content-width">
                    <h1 className="about-page-brand-heading">Brand Values</h1>
                    <div className="about-page-brand-imagebox-container">
                        <div className="about-page-imagebox">
                            <img src="./Images/about/about-page-img1.png" alt="Domain Knowledge" className="about-page-imagebox-image" />
                            <h3 className="about-page-imagebox-heading">Domain Knowledge</h3>
                            <p className="about-page-imagebox-para">We are building the world’s largest parts knowledge base to assist everyone involved in manufacturing, supplying, and repairing heavy equipment.</p>
                        </div>
                        <div className="about-page-imagebox">
                            <img src="./Images/about/about-page-img2.png" alt="Sourcing Network" className="about-page-imagebox-image" />
                            <h3 className="about-page-imagebox-heading">Sourcing Network</h3>
                            <p className="about-page-imagebox-para">We aim to create a larger sourcing network, making our supply chain more accessible and responsive to handle stock shortages effectively.</p>
                        </div>
                        <div className="about-page-imagebox">
                            <img src="./Images/about/about-page-img3.png" alt="Technology Expertise" className="about-page-imagebox-image" />
                            <h3 className="about-page-imagebox-heading">Technology Expertise</h3>
                            <p className="about-page-imagebox-para">We leverage the latest technologies to innovate and provide cutting-edge solutions in heavy equipment management and repair.</p>
                        </div>
                        <div className="about-page-imagebox">
                            <img src="./Images/about/about-page-img4.png" alt="Customer Support" className="about-page-imagebox-image" />
                            <h3 className="about-page-imagebox-heading">Entrepreneurial Mind</h3>
                            <p className="about-page-imagebox-para">We are passionate entrepreneurs and are growing mad, and we will always make conscious efforts to grow by giving better benefits to our customers.</p>
                        </div>
                        
                        <div className="about-page-imagebox">
                            <img
                                src="./Images/about/about-page-img5.png"
                                alt="about-imagebox"
                                className="about-page-imagebox-image" />
                            <h3 className="about-page-imagebox-heading">Passion for Speed</h3>
                            <p className="about-page-imagebox-para">We understand the pain of losing revenue during equipment downtime, hence we are process fanatics and SPEED is in our DNA to deliver critical parts on time.</p>
                        </div>
                        <div className="about-page-imagebox">
                            <img
                                src="./Images/about/about-page-img6.png"
                                alt="about-imagebox"
                                className="about-page-imagebox-image" />
                            <h3 className="about-page-imagebox-heading">Customer Service</h3>
                            <p className="about-page-imagebox-para">We are building the entire organization so that our customers will have peace of mind while buying parts from Yantralive.com and are assured of reasonable price and quality of parts we deliver.</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Leadership Team Section */}
            <div className="about-page-team-section-outer-container">
                <div className="about-page-team-section-container">
                    <h1 className="about-page-brand-heading">Meet our leadership team</h1>
                    <div className="about-page-team-card-container content-width">
                        {teamMembers.map((members, index) => (
                            <div className={`about-page-team-card ${flippedIndex === index ? "is-flipped" : ""}`} key={index}>
                                <div className="about-page-team-front-card">
                                    <img
                                        src={members.img}
                                        alt={members.name} // Use members.name for the alt text
                                        className="about-team-team-card-image" />
                                    <h3 className="about-page-team-card-name">{members.name}</h3>
                                    <div className="about-page-linkedlin-arrow-icons">
                                        <img
                                            src='./Images/linkedlin.png'
                                            alt="LinkedIn profile"
                                            className="about-page-linkedlin" />
                                        <img
                                            src='./Images/right-arrow.png'
                                            alt="Flip card"
                                            className="about-page-team-card-right-arrow"
                                            onClick={() => handleFlipAction(index)} // Pass the index
                                        />
                                    </div>
                                </div>
                                <div className="about-page-team-back-card">
                                    <h3>{members.name}</h3>
                                    <p>{members.backContent}</p>
                                    <div className="about-page-linkedlin-arrow-icons">
                                        <img
                                            src='./Images/linkedlin.png'
                                            alt="LinkedIn profile"
                                            className="about-page-linkedlin" />
                                        <img
                                            src='./Images/left-arrow.png'
                                            alt="Flip card"
                                            className="about-page-team-card-right-arrow"
                                            onClick={() => handleFlipAction(index)} // Pass the index
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img                    
                        src="./Images/background-vector4.png" 
                        alt="background-vector4"
                        className="about-page-background-vector4"/>
                </div>
            </div>
        </div>
    );
}

export default About;
