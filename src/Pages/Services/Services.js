import React from 'react';
import './Services.css';
import EnquireForm from '../../Components/EnquireForm-page/EnquireForm';


const Services = () => {


    const categoriesData = [
        {

            mainHeading: "Hydraulics",
            mainHeadingContent: "Heavy construction equipment runs on powerful hydraulics. Hydraulic systems include cylinders, pumps, motors, and valves. These and other hydraulic components need regular maintenance to keep performing at optimal levels. YantraLive is a full-service hydraulic maintenance and repair provider for all equipment types. We work with clients in construction, mining, agriculture, landscaping, and other industries.",
            subContent1: "Overhaul and repair critical sub-assemblies like hydraulic pumps, motors, swing devices, travel devices, transmissions, valve banks.",
            subContent2: "Overhaul and repairs of major sub-assemblies, maintenance and troubleshooting of hydraulic circuits related to earthmoving, material handling, and construction equipment",
            imageUrl: "./Images/Categories/Hydraulic_Pump_Vector-removebg-preview.webp"
        },
        {
            mainHeading: "Engine",
            mainHeadingContent: "Engine maintenance and repairs are important to keep your heavy equipment running smoothly and predictably to avoid work delays. For the sake of your fleet, you cannot skimp on maintenance. In fact, keeping up with the operation of your construction equipment is almost as important a task as using it. Find repairs for all types of engines at YantraLive.",
            subContent1: "Available for all types of engines with genuine spare parts by qualified professional engineers with vast experience.",
            subContent2: "",
            imageUrl: "./Images/Categories/car-engine.webp"
        },
        {
            mainHeading: "Electrical",
            mainHeadingContent: "Electrical Repairs for all Earthmoving equipment such as excavators, loaders, bulldozers, trenchers, and more. Our technicians strive to deliver the most efficient solutions to repair or maintain your machinery in the most cost-effective way. Available for emergency services also, we are dedicated to attending to your needs in times of sudden breakdowns or auto electrical faults.",
            subContent1: "Available for various electrical directional control solenoid valves, Electronic pump displacement controls, infinitely variable electronic displacement controls, controller units, ignition key switches, wiring harnesses, etc., of the most commonly used equipment in the Indian industry",
            subContent2: "",
            imageUrl: "./Images/Categories/Electrical.webp"
        },
        {
            mainHeading: "Mechanical",
            mainHeadingContent: "Mechanical Repairs for all Earthmoving equipment such as excavators, loaders, bulldozers, trenchers, and more. We work with clients in construction, mining, agriculture, landscaping, and other industries. Our technicians strive to deliver the most efficient solutions to repair or maintain your machinery in the most cost-effective way.",
            subContent1: "Replacement parts of various pivot pins, bushings, and wear items like ground engaging tools, rock breaker parts, buckets, H-Link, and connecting link assemblies related to various earthmoving equipment.",
            subContent2: "",
            imageUrl: "./Images/Categories/Mechanical.webp"
        },
    ]
    const equipmentsList = [
        {
            imageurl: "./Images/Categories/Backhoe-Loaders-1.jpg",
            type: "Backhoe Loader"
        },
        {
            imageurl: "./Images/Categories/excavator2.jpg",
            type: "Excavator"
        },
        {
            imageurl: "./Images/Categories/Loader.png",
            type: "Loader"
        },
        {
            imageurl: "./Images/Categories/vibratory-rollers.jpg",
            type: "Vibratory Rollers"
        },
    ]

    const brandsBGImage = './Images/Categories/brands-bg.png';
    const brandsImages = [
        "./Images/Categories/brands1.webp",
        "./Images/Categories/brand2.webp",
        "./Images/Categories/brand3.webp",
        "./Images/Categories/brand4.webp",
        "./Images/Categories/brand5.webp",
        "./Images/Categories/brand6.webp",
        "./Images/Categories/brand7.webp",
        "./Images/Categories/brand8.webp",
        "./Images/Categories/brand9.jpg",
    ]

    return (
        <>
            {/* Enquire form section */}
            <EnquireForm />

            {/* find services and equipment section */}
            <div className='services-page-equipment-section content-width'>
                <h1 className='services-page-equipment-container-heading'>Find Services for all <br />Types of Equipment</h1>
                <div className='services-page-equipments-display-container content-width'>
                    {equipmentsList.map((data, index) => (
                        <div className='services-page-equipments-display' key={index}>
                            <img src={data.imageurl} alt='equipment-images'
                                className='services-page-equipment-images'
                            ></img>
                            <p className='services-page-equipment-name'>{data.type}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* brands section */}
            <div
                className='services-brands-section-outer-container'
                style={{
                    background: `url(${brandsBGImage})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >

                <div className='services-brands-content-container content-width'>
                    <h1 className='services-page-brands-container-heading'>Brands we cover</h1>
                    <div className='services-brands-images-container' >
                        {brandsImages.map((images, index) => (
                            <div key={index}>
                            <img src={images} alt="brands-images" className='services-brand-images' ></img>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Types of services section */}
            <h1 className='services-types-heading'>Type of Services</h1>
            <div className='categories-content-container content-width'>
                <h2 className='services-content-main-heading'>A. Repair Services</h2>
                {categoriesData.map((data, index) => (
                    <div className='categories-single-content-container' key={index}>
                        <h2>{data.mainHeading}</h2>
                        <p className='categories-single-content-para1'>{data.mainHeadingContent}</p>

                        <div className='categories-subContent-container'>



                            <div className='categories-subContent-left-container'>
                                <h3>Repairs</h3>
                                <p className='services-subcontent'> {data.subContent1}</p>
                                <p className='services-subcontent'>{data.subContent2}</p>

                            </div>
                            <div className='categories-subContent-right-container'>
                                <img src={data.imageUrl}
                                    className='services-image'
                                    alt='categories-image' />
                            </div>

                        </div>
                    </div>
                ))}
                <h2 className='services-content-main-heading'>B. Onsite Fitment Service</h2>

                <div className='categories-single-content-container'>
                    <p className='categories-single-content-para1'>Rockbreakers turn compact loaders and excavators into powerful demolition machines, breaking concrete, asphalt, rock, and other materials. Our Service Engineers are well trained in commissioning rock breakers.</p>

                    <div className='categories-subContent-container'>
                        <div className='categories-subContent-left-container'>
                            <h3>Service</h3>
                            <p className='services-subcontent'>Onsite fitment service available for all Earthmoving equipment such as excavators, loaders, bulldozers, trenchers and more.</p>
                        </div>
                        <div className='categories-subContent-right-container'>
                            <img src="./Images/Categories/OnsiteFitmentService.webp"
                                className='services-image'
                                alt='categories-image' />
                        </div>

                    </div>
                </div>

                <h2 className='services-content-main-heading'>C. General inspection</h2>

                <div className='categories-single-content-container'>
                    <p className='categories-single-content-para1'>For Troubleshooting , Breakdown Repairs and Preventive Maintenance. An excellent and systematic approach to troubleshooting helps us in gauging and rectifying a number of problems of the equipment at the site itself. Our technicians strive to deliver the most efficient solutions.</p>

                    <div className='categories-subContent-container'>
                        <div className='categories-subContent-left-container'>
                            <h3>Service</h3>
                            <p className='services-subcontent'>Breakdown Repairs, Troubleshooting and Preventive Maintenance of your heavy equipment. The components or sub-assemblies will be transported to our workshop only if the repairs are not possible at site</p>
                        </div>
                        <div className='categories-subContent-right-container'>
                            <img src="./Images/Categories/ins1.webp"
                                className='services-image'
                                alt='categories-image' />
                        </div>

                    </div>
                </div>

            </div>
        </>

    )
}

export default Services;
