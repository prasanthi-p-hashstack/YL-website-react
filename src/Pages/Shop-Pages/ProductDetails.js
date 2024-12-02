import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './ProductDetails.css';
import { addToQuote, selectedProduct as selectProductAction } from '../../redux/actions/productActions';
import ProductCard from '../Shop-Pages/ProductCard'
import data from '../../Components/Assets/all-products';

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.allProducts.products);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImg, setActiveImg] = useState('');
  const [zoom, setZoom] = useState(false); // Zoom state
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Drag position
  const [dragging, setDragging] = useState(false); // Dragging state
  const [startPos, setStartPos] = useState({ x: 0, y: 0 }); // Start position for drag
  const dispatch = useDispatch();
  const [displaytabAcontent, setDisplayTabAcontent] = useState(true);
  const [displaytabBcontent, setDisplayTabBcontent] = useState(false);
  const thumbnailRef = useRef(null);
 const navigate = useNavigate();

  useEffect(() => {
    // Dispatch the products data to Redux on component mount
    if (data) {
      dispatch(selectProductAction(data));
    }
  }, [dispatch]);

  // Find the selected product based on the id from params
  const selectedProduct = products?.find((product) => product.equipmentId === parseInt(id));

  // Safely extract the images from the selected product
  const images = selectedProduct?.imageload?.map((image) => image.imageName) || [];


  const handleNextArrow = () => {
    const newIndex = (currentIndex + 1) % images.length; // Loop to the first image
    setCurrentIndex(newIndex);
    setActiveImg(images[newIndex]);
    if (thumbnailRef.current) {
      if (window.innerWidth <= 650) {
        // Scroll horizontally on small screens
        thumbnailRef.current.scrollBy({ left: 80, behavior: 'smooth' });
      } else {
        // Scroll vertically on larger screens
        thumbnailRef.current.scrollBy({ top: 135, behavior: 'smooth' });
      }
    }
  }

  const handlePrevArrow = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
    setCurrentIndex(newIndex);
    setActiveImg(images[newIndex]);
    if (thumbnailRef.current) {
      if (window.innerWidth <= 650) {
        // Scroll horizontally on small screens
        thumbnailRef.current.scrollBy({ left: -80, behavior: 'smooth' });
      } else {
        // Scroll vertically on larger screens
        thumbnailRef.current.scrollBy({ top: -135, behavior: 'smooth' });
      }
  }
}

  const handleTabAButton = () => {
    setDisplayTabAcontent(true);
    setDisplayTabBcontent(false);
  };

  const handleTabBButton = () => {
    setDisplayTabAcontent(false);
    setDisplayTabBcontent(true);
  };

  // Toggle zoom and reset position on double click
  const toggleZoom = () => {
    setZoom(!zoom);
    setPosition({ x: 0, y: 0 }); // Reset position when toggling zoom
  };

  // Handle drag on desktop
  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // Handle drag on touch devices
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setDragging(true);
    setStartPos({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const handleTouchMove = (e) => {
    if (dragging) {
      const touch = e.touches[0];
      setPosition({ x: touch.clientX - startPos.x, y: touch.clientY - startPos.y });
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  if (!selectedProduct) {
    return <div>Product not found!</div>;
  }
//Add to quote functionality
  const handleAddToQuote = () =>{
    dispatch(addToQuote(selectedProduct));// Add product to Redux state
    console.log('Dispatching ADD_TO_QUOTE action with:', selectedProduct);
    console.log(`${selectedProduct.title} added to the quote`);
    navigate('/add-to-quote');
  }
  // recent products functionality
  const recentproductsLists = products.sort((a, b) => new Date(b.updatedTs) - new Date(a.updatedTs))
  const recentProducts = recentproductsLists.slice(0, 4);
  console.log(recentProducts)

  return (
    <div className="single-product-page content-width">
      <div className='single-product-page-breadcrumbs'>
        <a href='/' className='breadcrumbs-home-link'>Home </a>
        <span className="breadcrumb-separator">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </span>
        <a href='/' className='breadcrumbs-category-link'> Category </a>
        <span className="breadcrumb-separator">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </span>
        <span className='breadcrumb-title'> {selectedProduct.title}</span>
      </div>
      <div className="product-details-content-container">
        <div className="product-details-left-container">
          {/* Hero Image */}
          <div
            className="product-details-hero-image-container"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onDoubleClick={toggleZoom}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={activeImg || images[0]}
              alt="Selected"
              className={`product-details-hero-image ${zoom ? 'zoomed' : ''}`}
              style={{
                transform: zoom
                  ? `scale(2) translate(${position.x}px, ${position.y}px)`
                  : 'scale(1)',
              }}
              draggable={false}
            />
          </div>
          {/* Image Carousel */}
          <div className="product-details-image-caurosel">
            <img
              src="/Images/slide-up-arrow.png"
              alt="up-arrow"
              className="slide-arrow"
              onClick={handlePrevArrow}
            />
            <div className="product-details-images" ref={thumbnailRef}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`product-details-image-thumbnail 
                      ${currentIndex === index ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentIndex(index);
                      setActiveImg(image);
                    }}
                  />
                </div>
              ))}
            </div>
            <img
              src="/Images/slide-down-arrow.png"
              alt="down-arrow"
              className="slide-arrow"
              onClick={handleNextArrow}
            />
          </div>
        </div>

        <div className="product-details-right-container">
          <h2 className="product-details-content-heading">{selectedProduct.title}</h2>
          <p className="product-details-content-category">
            {selectedProduct?.Category || 'Category'}
          </p>
          <p className="product-details-content-meta-data">
            Type: <span>{selectedProduct.equipmentType}</span>
          </p>
          <p className="product-details-content-meta-data">
            Brand: <span>{selectedProduct.brandName}</span>
          </p>
          <p className="product-details-content-meta-data">
            Model: <span>{selectedProduct.modelName}</span>
          </p>
          <p className="product-details-content-meta-data">
            Year of Mfg: <span>{selectedProduct.yearOfManufacture}</span>
          </p>
          <p className="product-details-content-meta-data">
            HMR Value: <span>{selectedProduct.hoursMeterReading}</span>
          </p>
          <button className="add-to-quote-button"
                onClick={handleAddToQuote}
          >ADD TO QUOTE</button>
        </div>
      </div>
      {/* Tabs Section */}
      <div className="product-details-tabbed-container">
        <button
          className={`product-details-tabbed-button ${displaytabAcontent ? 'active' : ''}`}
          onClick={handleTabAButton}
        >
          DESCRIPTION
        </button>
        <button
          className={`product-details-tabbed-button ${displaytabBcontent ? 'active' : ''}`}
          onClick={handleTabBButton}
        >
          ADDITIONAL INFORMATION
        </button>
        <div className="product-details-tabs-content-container">
          {displaytabAcontent && (
            <div className="product-details-tabA-content">
              <h3 className="tabA-subHeading">Overview:</h3>
              <p className="tabA-content">{selectedProduct.overview}</p>
              <h3 className="tabA-subHeading">Performance Capabilities:</h3>
              <p className="tabA-content">{selectedProduct.performanceCapabilities}</p>
              <h3 className="tabA-subHeading">Specifications Summary:</h3>
              <p className="tabA-content">{selectedProduct.specificationsSummary}</p>
            </div>
          )}
          {displaytabBcontent && (
            <table className="product-details-tabB-content">
              <tr className="product-details-tabB-table">
                <td>Asset Id</td>
                <td>211434</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>Excavator</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>CATERPILLAR</td>
              </tr>
            </table>
          )}
        </div>
      </div>

      {/* Recent Products */}
      <h1 className='buy-sell-intro-heading used-equipment-heading'>Recent <span>Products</span></h1>

      <div className='product-list-container recentproducts'>
        {recentProducts.map((product) => (
          <ProductCard product={product} key={product.equipmentId} />
        ))}
      </div>



    </div>
  );
};

export default ProductDetails;
