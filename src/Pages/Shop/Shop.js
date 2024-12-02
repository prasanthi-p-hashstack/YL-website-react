import React from "react";
import ShopCard from "../../Components/Shop_card/Shop-Card";
import data from "../../Components/Assets/all-products";
// import './Shop.css';

const Shop = () => {
    const fallbackImage = "/Images/web-logo.png"; 
    return (

        <div className="shop-container">
            {data.map((product, index) => {
                const firstImageUrl = product.imageload && product.imageload.length > 0
                    ? product.imageload[0].imageName
                    : fallbackImage;

                console.log("Title", product.title);
                console.log('YOM', product.yearOfManufacture);
                console.log('HMR', product.hoursMeterReading);
                console.log('Location', product.currentLocationState);

                return (
                    <ShopCard
                        key={index}
                        id={product.equipmentId}
                        title={product.title}
                        imageUrl={firstImageUrl}
                        yearOfMfg={product.yearOfManufacture}
                        hmr={product.hoursMeterReading}
                        location={product.currentLocationState}
                    />
                )

            })}
        </div>

    );
};

export default Shop;

