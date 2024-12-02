import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import data from '../../Components/Assets/all-products';
import { setProducts } from '../../redux/actions/productActions';
import './Shop.css';

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;

  useEffect(() => {
    // Dispatch products data to Redux store on component mount
    console.log('Dispatching data:', data);
    dispatch(setProducts(data));
  }, [dispatch]);

  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products found</p>;
  }

  // Pagination calculations
  const nofPages = Math.ceil(products.length / recordsPerPage);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const paginatedProducts = products.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(products.length / recordsPerPage);
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  // Pagination controls
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== nofPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div className="product-listing-container content-width">
      <h2>Shop</h2>
      <div className="product-list-container">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.equipmentId} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                previousPage();
              }}
            >
              <img src="./Images/left-arrow.png" alt="left-arrow" className="pagination-left-arrow" />
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={number}>
              <a
                href="#"
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  changeCurrentPage(number);
                }}
              >
                {number}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                nextPage();
              }}
            >
              <img src="./Images/right-arrow.png" alt="right-arrow" className="pagination-right-arrow" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductListing;
