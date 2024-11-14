import React from "react";
import "./Shop-Card.css";

const ShopCard = (props) => {
    return (
        <div className="shop-card-container">
            <img 
                src={props.imageUrl}  // Use the imageUrl prop passed from Shop component
                className="shop-card-image"
                alt="product-image"
            />
            <p className="product-title">{props.title}</p>
            <p className="product-details">YOM: {props.yearOfMfg}</p> {/* Ensure the prop name matches */}
            <p className="product-details">HMR: {props.hmr}</p> {/* Ensure the prop name matches */}
            <p className="product-details">{props.location}</p> {/* Ensure the prop name matches */}
            <button className="product-view-details">VIEW DETAILS</button>
        </div>
    );
};

export default ShopCard;
