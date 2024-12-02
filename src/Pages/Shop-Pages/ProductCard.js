import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

const ProductCard = ({ product }) => {
  
  const imageUrl = product?.imageload?.[0]?.imageName || ''; 
  return (
    <div className="shop-card-container" key={product.equipmentId}>
      <img src={imageUrl} className="shop-card-image" alt={product.title} />
      <p className="product-title">{product.title}</p>
      <p className="product-details">YOM: {product.yearOfManufacture}</p>
      <p className="product-details">HMR: {product.hoursMeterReading}</p>
      <p className="product-details">{product.location}</p>
      <button className="product-view-details">
        <Link to={`/product/${product.equipmentId}`}>VIEW DETAILS</Link>
      </button>
    </div>
  );
};

export default ProductCard;
