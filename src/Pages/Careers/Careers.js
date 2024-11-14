import React, { useState, useEffect } from "react";
import "./Careers.css";
import FestivalsGallery from "./Festivals-Gallery";
import JobListing from "./Job-Listing";



const Careers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFestivalsGalleryVisible, setIsFestivalsGalleryVisible] = useState(false);
    const [isEventsGalleryVisible, setIsEventsGalleryVisible] = useState(false);

    
    

    const testimonials = [
        {
            content: "Joining this company at a young age has been an incredible opportunity for me to shape my future. It has provided me with a dynamic environment where I am continuously learning and growing. The company’s emphasis on leadership and management skills has allowed me to develop professionally, and its growth-oriented culture aligns perfectly with my aspirations. I’m grateful to be part of a team that encourages personal and professional development, setting a strong foundation for my career",
            name: "Shivaprasad",
            jobTitle: "Manager"
        },
        {
            content: "Being part of Yantralive’s transformative phase has been an enriching experience. As a member of the HR team, I take pride in fostering a work culture built on innovation, teamwork, and continuous personal development. Yantralive truly believes in empowering its employees, creating an environment where everyone is appreciated and encouraged to excel. This strong focus on people makes Yantralive more than just a workplace—it’s a community where talent is nurtured and careers grow. I’m excited to contribute to a company that is not only shaping the future with advanced solutions but also supporting a dedicated and passionate team.",
            name: "Priyadarshini",
            jobTitle: "Deputy Manager HR"
        },
        {
            content: "Working with Yantralive over the past year has been an incredibly positive experience. The opportunity to collaborate with industry leaders like Mr. Pawan Arya and Mr. Vijaykrishna Gowda, who bring a wealth of experience in construction and mining, has been invaluable. Their guidance and expertise have significantly broadened my knowledge, making me feel as informed as someone with a decade of experience. I am truly grateful for the professional growth and learning I’ve achieved thanks to Yantralive and its exceptional team of leaders.",
            name: "Vatsal Raghwani",
            jobTitle: "Export Sales Executive"
        },
        {
            content: "Working with YantraLive has been a great experience for me. I had been entrusted with opportunities and responsibilities helping my growth. The work culture at YantraLive is nurturing. The entire team is always ready to help. I was given a lot of new opportunities, which helped me on both technical and soft skills like negotiation within the team.",
            name: "Sathwick",
            jobTitle: "Intern"
        }
    ];
    const festivalsPhotos = [
        "./Images/careers/festivals1.webp",
        "./Images/careers/festivals2.webp",
        "./Images/careers/festivals3.webp",
        "./Images/careers/festivals4.webp",
        "./Images/careers/festivals5.webp",
        "./Images/careers/festivals6.webp",
        "./Images/careers/festivals7.webp",
        "./Images/careers/festivals8.webp"
    ]
    const eventsPhotos = [
        "./Images/careers/events1.jpg",
        "./Images/careers/events2.jpg",
        "./Images/careers/events3.jpg",
        "./Images/careers/events4.jpg",
    ]

    // Handle left arrow click
    const handleLeftArrow = () => {
        const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Handle right arrow click
    const handleRightArrow = () => {
        const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Auto-loop the testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [currentIndex, testimonials.length]);

    const handleGalleryButtonClick = () =>{
       setIsFestivalsGalleryVisible(true);
    }

    const handleCloseGallery = () => {
        setIsFestivalsGalleryVisible(false);
        setIsEventsGalleryVisible(false);
    };

    const handleEventsGalleryButtonClick =() =>{
        setIsEventsGalleryVisible(true);
    }
    return (
        <div>
            <div className="careers-page-banner">
                <img src="./Images/careers/careers-banner.png" alt="Careers Banner" />
            </div>
            {/* testimonials content */}
            <div className="careers-page-testimonials-container content-width">
                <div className="careers-page-left-conatiner">
                    <h3 className="career-page-left-container-content">
                        What’s it like to work with
                        <span className="career-page-left-container-content-span"> YantraLive</span>
                    </h3>
                </div>
                <div className="careers-page-right-conatiner">
                    <img src="./Images/quotes.png" alt="quotes" className="careers-page-testimonials-quotes" />
                    <div className="careers-page-testimonial-container">
                        <p className="careers-page-testimonial-content">{testimonials[currentIndex].content}</p>
                        <p className="careers-page-testimonial-name">{testimonials[currentIndex].name}</p>
                        <p className="careers-page-testimonial-job-title">{testimonials[currentIndex].jobTitle}</p>
                    </div>

                    <div className="carousel-arrows testimonials">
                    <img src="./Images/left-arrow.png" onClick={handleLeftArrow} alt="left-arrow" className="left-arrow"/>
                    <img src="./Images/right-arrow.png" onClick={handleRightArrow} alt="right-arrow" className="right-arrow" />
                    </div>
                </div>
            </div>

            {/* career page job-listing section */}
            <JobListing/>

            {/* careers page content section */}
            <div className="careers-page-content-outer-container">
                <div className="careers-page-content-container content-width">
                    <div className="careers-page-content-left-container">
                        <p className="careers-page-left-content-para1">YantraLive as an employer</p>
                        <p className="careers-page-left-content-para2">This collaborative environment drives groundbreaking solutions in the heavy equipment industry</p>
                    </div>
                    <div className="careers-page-content-right-container">
                        <p className="careers-page-right-content-para1">At YantraLive, we pride ourselves on being an employer that nurtures talent and fosters an environment of growth and innovation.</p>
                        <p className="careers-page-right-content-para2">Our commitment to employee development is at the heart of our operations, ensuring that every team member has the opportunity to excel and contribute to our mission. We offer a supportive, dynamic workplace where ideas are valued, and collaboration leads to groundbreaking solutions in the heavy equipment industry.</p>
                    </div>
                </div>
            </div>

            {/* content-width increase on hover section */}
            <div className="hover-section-outer-conainer">
                <div className="hover-section-single-container">
                    <div className="hover-section-single-text-container">
                        <p className="hover-section-para1">Collaborative Culture</p>
                        <p className="hover-section-para2">Engage with a diverse team of professionals who bring a wealth of experience and knowledge. Collaboration and teamwork are at the heart of our operations.</p>
                    </div>
                    <div className="hover-section-image-container">
                        <img src="./Images/careers/careers-hover.png" className="hover-section-right-image" />
                    </div>
                </div>
                <div className="hover-section-single-container2">
                    <div className="hover-section-left-image-container">
                        <img src="./Images/careers/careers-hover.png" className="hover-section-left-image" />
                    </div>
                    <div className="hover-section-single-text-container2">
                        <p className="hover-section-container2-para1">Career Advancement</p>
                        <p className="hover-section-container2-para2">At Yantralive, your dedication and skills are recognized and rewarded with opportunities for advancement.</p>
                    </div>
                </div>
                <div className="hover-section-single-container">
                    <div className="hover-section-single-text-container">
                        <p className="hover-section-para1">Work-Life Balance</p>
                        <p className="hover-section-para2">We understand the importance of maintaining a healthy work-life balance and ensure a fun and engaged workplace environment.</p>
                    </div>
                    <div className="hover-section-image-container">
                        <img src="./Images/careers/careers-hover.png" className="hover-section-right-image" />
                    </div>
                </div>
            </div>
            {/* hover-content-section-for mobile */}
            <div className="hover-section-outer-conainer-mob">
                <div className="hover-section-single-container-mob">
                    <div className="hover-section-single-text-container-mob">
                        <p className="hover-section-para1-mob">Collaborative Culture</p>
                        <p className="hover-section-para2-mob">Engage with a diverse team of professionals who bring a wealth of experience and knowledge. Collaboration and teamwork are at the heart of our operations.</p>
                    </div>
                    <div className="hover-section-image-container-mob">
                        <img src="./Images/careers/careers-hover.png" className="hover-section-image" />
                    </div>
                </div>
                <div className="hover-section-single-container-mob">

                    <div className="hover-section-single-text-container-mob">
                        <p className="hover-section-para1-mob">Career Advancement</p>
                        <p className="hover-section-para2-mob">At Yantralive, your dedication and skills are recognized and rewarded with opportunities for advancement.</p>
                    </div>
                    <div className="hover-section-image-container-mob">
                        <img src="./Images/careers/careers-hover.png" className="hover-section-image" />
                    </div>
                </div>
                <div className="hover-section-single-container-mob">
                    <div className="hover-section-single-text-container-mob">
                        <p className="hover-section-para1-mob">Work-Life Balance</p>
                        <p className="hover-section-para2-mob">We understand the importance of maintaining a healthy work-life balance and ensure a fun and engaged workplace environment.</p>
                    </div>
                    <div className="hover-section-image-container-mob">
                        <img src="./Images/careers/careers-hover.png" className="hover-section-image" />
                    </div>
                </div>
            </div>


            {/* festivals@YL */}
            <div className="careers-page-festivals-section-container content-width">
                <h2 className="festivals-section-heading">Life At <span>Yantralive </span></h2>
                <div className="festivals-section-gallery-container content-width">
                    <div className="festivals-section-gallery-container1">
                        <img
                            src="./Images/careers/festivals-cover-photo.png"
                            className='festivals-cover-photo'
                            alt="festivals-cover-photo" />
                        <div className="festivals-plus-more-button-container">
                            <button className="festivals-plus-more-button" onClick={handleGalleryButtonClick}>+more</button>
                        </div>
                        {isFestivalsGalleryVisible &&                         
                                <FestivalsGallery onClose = {handleCloseGallery} images={festivalsPhotos}/>
                            }
                        <p className="festivals-section-title">Festivals@YL</p>
                        <p className="festivals-section-location">Banglore</p>
                    </div>
                    <div className="festivals-section-gallery-container1">
                        <img
                            src="./Images/careers/festivals-cover-photo.png"
                            className='festivals-cover-photo'
                            alt="festivals-cover-photo" />
                        <div className="festivals-plus-more-button-container">
                            <button className="festivals-plus-more-button" onClick={handleEventsGalleryButtonClick}>+more</button>
                            {isEventsGalleryVisible && (<FestivalsGallery onClose={handleCloseGallery} images={eventsPhotos}/>)}
                        </div>
                        <p className="festivals-section-title">Events@YL</p>
                        <p className="festivals-section-location">Banglore</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Careers;
