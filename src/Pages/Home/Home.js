import React, { useState, useEffect } from "react";
import "./Home.css";
import HighlightImageBox from "./HighLightImageBox";
import Counters from "./Counters";
import HeosComponent from "./Heos";
import AccordationButtons from "./Accordation-Buttons";
import BannerAnimation from "./Banner";

const Home = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonialsHome = [
        {
            content: "The team’s domain expertise and organized processes have helped us multiple times with our hard to find parts and were forthcoming in offering solution when machines were under breakdown at project sites. Now we can focus on our project completion and leave part purchase to YantraLive",
            name: "Niraj Seth",
            jobTitle: "urmila enterprise"
        },
        {
            content: "We had an equipment breakdown and had reached our O.E dealer for help but he did not have the rockbreaker parts that we needed. That’s when we approached YantraLive, they went the extra mile. Their technician visited our site in Tumkur and offered to provide service and parts for the rockbreaker. This significantly reduced our hassle and saved our time spent in repair",
            name: "Ajay Chitnis",
            jobTitle: "Ashoka Buildcon Limited"
        },
        {
            content: "The YantraLive team has been helping us with our parts purchase and was very prompt to respond to any of our requirements. We have been buying parts from them for the last 3 years and are very satisfied with their parts expertise. Many of our subcontractors also have shifted to Yantralive",
            name: "Gururaj",
            jobTitle: "Ecomaister Beads India Pvt. Ltd"
        }
    ];

    const handleLeftArrow = () => {

        const newIndex = currentIndex === 0 ? testimonialsHome.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Handle right arrow click
    const handleRightArrow = () => {
        const newIndex = currentIndex === testimonialsHome.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Auto-loop the testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === testimonialsHome.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [currentIndex, testimonialsHome.length]);



    return <div className="home-page">
        <BannerAnimation/>
        {/* imagebox code */}
        <div className="home-page-imagebox-container content-width">
            <div className="home-page-imagebox-each-card">
                <img src="./Images/Home/imagebox3.webp"
                    alt="imagebox"
                    className="home-imagebox-image">
                </img>
                <div className="home-imagebox-details">
                    <p className="home-imagebox-para1">Buy and Sell Equipment</p>
                    <p className="home-imagebox-para2">Trade the best global brands at
                        lowest prices.</p>
                    <a href="" className="home-image-box-button">buy and sell now </a>
                </div>
            </div>
            <div className="home-page-imagebox-each-card">
                <img src="./Images/Home/imagebox2.webp"
                    alt="imagebox"
                    className="home-imagebox-image">
                </img>
                <div className="home-imagebox-details">
                    <p className="home-imagebox-para1">Parts</p>
                    <p className="home-imagebox-para2">
                        Easy access, best availability, online ordering and doorstep delivery.</p>
                    <a href="" className="home-image-box-button">explore our one-stop shop</a>
                </div>
            </div>
            <div className="home-page-imagebox-each-card">
                <img src="./Images/Home/imagebox1.webp"
                    alt="imagebox"
                    className="home-imagebox-image">
                </img>
                <div className="home-imagebox-details">
                    <p className="home-imagebox-para1">Fleet Management</p>
                    <p className="home-imagebox-para2">Manage machine lifecycles to maximise productivity.</p>
                    <a href="" className="home-image-box-button">optimise your fleet now</a>
                </div>
            </div>
        </div>

        {/* Digital library section */}
        <div className="home-page-digotal-lib-section-outer-container">
            <div className="home-page-digital-lib-section content-width">
                <div className="home-dig-lib-left-container">
                    <h2 className="home-dig-lib-text-content">Get started with the <span className="dig-lib">Digital Diary</span> to manage your machines.
                        It’s <span className="dig-lib-vector">free!<img src="./Images/Home/text-vector.png" alt="text-vector" /></span></h2>
                    <button className="home-dig-lib-button">download now</button>

                </div>
                <div className="home-dig-lib-right-container">
                    <HighlightImageBox />
                </div>
            </div>
        </div>

        {/* eco system section */}
        <div className="home-page-eco-system-container content-width">
            <h3 className="home-page-eco-system-heading">We connect this ecosystem with our technology led innovation</h3>
            <div className="home-page-eco-system-container-img content width">
                <img src="./Images/Home/ecosystem-desktop.webp" alt="eco-system" className="home-page-eco-system-img-desktop"></img>
                <img src="./Images/Home/ecosystem-mobile.webp" alt="eco-system" className="home-page-eco-system-img-mobile"></img>
            </div>
        </div>

        {/* counters section */}
        <div className="home-page-counters-outer-container">
            <Counters />
        </div>

        {/* HEOS section */}
        <HeosComponent />

        <div className="home-page-technology-container content-width">
            <div className="home-page-technology-left-container">
                <p className="home-page-technology-left-para1">technology</p>
                <p className="home-page-technology-left-para2">Transparency.<br />
                    Efficiency.</p>
            </div>
            <div className="home-page-technology-right-container">
                <p className="home-page-technology-right-para">From using data science to prevent future breakdowns, service alerts to notify operators of an issue, and GPS to easily track down machines needing maintenance.</p>
                <button className="home-page-technology-button button-global1">download app</button>
            </div>
        </div>

        {/* Accordation buttons section */}
        <AccordationButtons />
        {/* content-width increase on hover section */}
        <div className="hover-section-outer-conainer">
            <div className="hover-section-single-container">
                <div className="hover-section-single-text-container">
                    <p className="hover-section-para1">Growing your business. Growing the industry.</p>
                    <p className="hover-section-para2">Infrastructure today is progressing at a lightning speed. As government and private capital is being applied in the sector at a mammoth scale, the sector needs tech intervention in an equally significant way. Our HEOS platform and YantraLive app environment use cutting edge technology to model and optimize resources and grow the sector.</p>
                </div>
                <div className="hover-section-image-container">
                    <img src="./Images/Home/home-page-hover1.webp" className="hover-section-right-image" />
                </div>
            </div>
            <div className="hover-section-single-container2 home" >
                <div className="hover-section-left-image-container">
                    <img src="./Images/Home/home-page-hover2.webp" className="hover-section-left-image" />
                </div>
                <div className="hover-section-single-text-container2 home">
                    <p className="hover-section-container2-para1">Networking communities</p>
                    <p className="hover-section-container2-para2">A large community of owners, vendors, buyers and users is networked on the YantraLive platform. From buying & selling, maintenance & finance and fleet management and payments, everything within the network is just a few clicks away. We are connecting people and building a new world - doing heavy lifting with ease.</p>
                </div>
            </div>
            <div className="hover-section-single-container home">
                <div className="hover-section-single-text-container">
                    <p className="hover-section-para1">Empowering
                        ecosystem</p>
                    <p className="hover-section-para2">The real power of YantraLive community is in quick and efficient deployment of resources, saving precious time, managing product lifecycle to the end.

                        We are making the sector more efficient, empowering the ecosystem and creating joy along along the way.</p>
                </div>
                <div className="hover-section-image-container home">
                    <img src="./Images/Home/home-page-hover3.webp" className="hover-section-right-image" />
                </div>
            </div>
        </div>
        {/* hover-content-section-for mobile */}
        <div className="hover-section-outer-conainer-mob">
            <div className="hover-section-single-container-mob">
                <div className="hover-section-single-text-container-mob">
                    <p className="hover-section-para1-mob">Growing your business. Growing the industry.</p>
                    <p className="hover-section-para2-mob">Infrastructure today is progressing at a lightning speed. As government and private capital is being applied in the sector at a mammoth scale, the sector needs tech intervention in an equally significant way. Our HEOS platform and YantraLive app environment use cutting edge technology to model and optimize resources and grow the sector.</p>
                </div>
                <div className="hover-section-image-container-mob">
                    <img src="./Images/Home/home-page-hover1.webp" className="hover-section-image" />
                </div>
            </div>
            <div className="hover-section-single-container-mob">

                <div className="hover-section-single-text-container-mob">
                    <p className="hover-section-para1-mob">Networking communities</p>
                    <p className="hover-section-para2-mob">A large community of owners, vendors, buyers and users is networked on the YantraLive platform. From buying & selling, maintenance & finance and fleet management and payments, everything within the network is just a few clicks away. We are connecting people and building a new world - doing heavy lifting with ease.</p>
                </div>
                <div className="hover-section-image-container-mob">
                    <img src="./Images/Home/home-page-hover2.webp" className="hover-section-image" />
                </div>
            </div>
            <div className="hover-section-single-container-mob">
                <div className="hover-section-single-text-container-mob">
                    <p className="hover-section-para1-mob">Empowering
                        ecosystem</p>
                    <p className="hover-section-para2-mob">The real power of YantraLive community is in quick and efficient deployment of resources, saving precious time, managing product lifecycle to the end.<br />

                        We are making the sector more efficient, empowering the ecosystem and creating joy along along the way.</p>
                </div>
                <div className="hover-section-image-container-mob">
                    <img src="./Images/Home/home-page-hover3.webp" className="hover-section-image" />
                </div>
            </div>
        </div>

        {/* static graph section */}
        <div className="home-page-static-graph-container content-width">
            <div className="home-page-static-graph-content-container">
                <p className="home-page-static-graph-para1">Designed with Flexibility</p>
                <p className="home-page-static-graph-para2">Our technology empowers retailers with the tools they need to scale their business. As the industry leader with the largest global autonomous store network, YantraLive’s solutions support any business, anywhere.</p>
                <img src="./Images/Home/50-2-1-1.webp" className="home-page-static-graph-image" alt="static-graph"></img>
            </div>
        </div>

        {/* testimonials section */}
        <div className="home-page-testimonials-outer-container">
            <div className="home-page-testimonials-content-container content-width">
                <img src="./Images/quotes.png" alt="quotes" className="careers-page-testimonials-quotes home" />
                {testimonialsHome.length > 0 && (
                    <div className="home-page-testimonials">
                        <p className="home-page-testimonial-content">{testimonialsHome[currentIndex].content}</p>
                        <p className="careers-page-testimonial-name">{testimonialsHome[currentIndex].name}</p>
                        <p className="careers-page-testimonial-job-title">{testimonialsHome[currentIndex].jobTitle}</p>
                    </div>
                )}


                <div className="carousel-arrows testimonialsHome">
                    <img src="./Images/left-arrow.png" onClick={handleLeftArrow} alt="left-arrow" className="left-arrow" />
                    <img src="./Images/right-arrow.png" onClick={handleRightArrow} alt="right-arrow" className="right-arrow" />
                </div>

            </div>
        </div>

    </div>
}
export default Home;