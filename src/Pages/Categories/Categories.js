import React, { useState, useEffect } from 'react';
import './Categories.css';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const headerBG = "./Images/Categories/backgrund-cat.webp";
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    const categoriesData = [
        {
            mainHeading: "Undercarriage Parts",
            mainHeadingContent: "An undercarriage is the supporting framework underneath any vehicle, whether it’s an excavator, car or tractor-trailer. Any wheels or tracks get attached or fitted to the undercarriage to help your machine move.",
            subContent1: "Berco | ITR | KMF | ITM | SBI",
            subContent2: "Track Link | Bottom Roller | Top Roller | Idler | Shoe Plate | Sprocket | TT Assembly",
            imageUrl: "./Images/Categories/p1.webp"
        },
        {
            mainHeading: "Filters",
            mainHeadingContent: "The role of the filters (oil, fuel, air, hydraulic) is to prevent dust, dirt and debris from entering all the critical systems of your machine that cause poor performance and a shorter operating life. For this reason, filters are engineered to provide maximum protection, increase productivity and ultimately save on the operating cost of your machine.",
            subContent1: "Mann Filter | YantraLive | Donaldson | Sakura",
            subContent2: "Air Filter | Engine Filter | Transmission Filter | Seal Kits | Fuel Filter | Hydraulic Filter",
            imageUrl: "./Images/Categories/DSC7870-removebg-preview.webp"
        },
        {
            mainHeading: "Toothpoint",
            mainHeadingContent: "Toothpoints are used in machines like excavators, tractors and soil diggers for excavating soil & rocks. They are used for lifting and digging work during construction and mining projects. Find the best quality toothpoints for Excavators and backhoe loaders here.",
            subContent1: "JCB | YantraLive | CAT | Kobelco | Volvo",
            subContent2: "Adaptors | Tooth points | Lock pins | Washers | Side cutters | Side cutter bolts",
            imageUrl: "./Images/Categories/excavator-tooth-points-250x250-1.webp"
        },
        {
            mainHeading: "Engine Parts",
            mainHeadingContent: "Engines are the heart of our heavy machinery. Diesel engines are actually simpler versions of gasoline engines designed for heavier machines that need more power. It works via internal combustion systems, which means fuel is processed and used inside the machine rather than outside.",
            subContent1: "Isuzu | Mitsubishi | Volvo | Doosan | Hino | Caterpillar | TATA | JCB",
            subContent2: "Starter Motor | Alternators | Fan Belts and Pulleys | Engine Blocks | Turbo Charger | Radiator Assemblies | LPR Kit",
            imageUrl: "./Images/Categories/car-engine.webp"
        },
        {
            mainHeading: "Rockbreakers",
            mainHeadingContent: "A rockbreaker is a machine designed to manipulate large rocks, including reducing large rocks into smaller rocks. Rockbreakers turn compact loaders and excavators into powerful demolition machines, breaking concrete, asphalt, rock and other materials. Often, these materials need to be removed before replacement or new construction can begin.",
            subContent1: "USCO | Mines King | Black Eagle | Unicorn",
            subContent2: "Hydraulic Pump | Pump Parts | Hydraulic Piston Cylinders | Swing Motor parts | Track Motor | ValvesHydraulic Breaker | Chisels | Pistons | Front End Bushes | Bolts and Nuts | Retainer",
            imageUrl: "./Images/Categories/p4.webp"
        }
    ];

    useEffect(() => {
        // Detect if screen width is less than 767px and update `isMobile`
        const handleResize = () => setIsMobile(window.innerWidth < 767);

        // Initial check on component mount
        handleResize();

        // Add resize event listener
        window.addEventListener("resize", handleResize);

        // Cleanup on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='categories-background-container'>
            <div className='categories-header-container'
                style={{
                    background: `url(${headerBG})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className='categories-heading-content-container content-width'>
                    <h2 className='categories-heading'>Categories</h2>
                    <p className='categories-breadcrumbs'> Home /<span> Categories</span></p>
                </div>
            </div>
            <div className='categories-content-container content-width'>
                <h2 className='categories-content-main-heading'>Indicative list of all the types of part categories we serve</h2>
                {categoriesData.map((data, index) => (
                    <div className='categories-single-content-container' key={index}>
                        <h2>{data.mainHeading}</h2>
                        <p className='categories-single-content-para1'>{data.mainHeadingContent}</p>

                        <div className='categories-subContent-container'>
                            {/* Apply opposite layout on mobile devices */}
                            {isMobile || index % 2 === 0 ? (
                                 <>
                                 <div className='categories-subContent-left-container'>
                                     <h3>Brands supported</h3>
                                     <p>{data.subContent1}</p>
                                     <h3>Parts</h3>
                                     <p>{data.subContent2}</p>
                                     <button onClick={()=>navigate('/shop')}>Explore Marketplace</button>
                                 </div>
                                 <div className='categories-subContent-right-container'>
                                     <img src={data.imageUrl} alt='categories-image' />
                                 </div>
                             </>
                                
                            ) : (
                                <>
                                    <div className='categories-subContent-right-container'>
                                        <img src={data.imageUrl} alt='categories-image' />
                                    </div>
                                    <div className='categories-subContent-left-container'>
                                        <h3>Brands supported</h3>
                                        <p>{data.subContent1}</p>
                                        <h3>Parts</h3>
                                        <p>{data.subContent2}</p>
                                        <button onClick={()=>navigate('/shop')}>Explore Marketplace</button>
                                    </div>
                                </>
                               
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
