import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './AddToQuote.css'
import { removeFromQuote, updateQuantity } from '../../redux/actions/productActions';

const AddToQuote = () => {
  const carts = useSelector((state) => state.allProducts.carts); // Get the products in the quote
  const dispatch = useDispatch();

  // Handle delete product from the quote
  const handleDelete = (productId) => {
    dispatch(removeFromQuote(productId));
  };

  // Handle quantity update
  const handleQuantityChange = (productId, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity(productId, quantity));
    }
  };

  if (carts.length === 0) {
    return <div className="add-to-quote-empty">No products in the quote!</div>;
  }

  return (
    <div className="add-to-quote-page content-width">
      <h1 className="add-to-quote-title">Your Quote</h1>
      <table className="add-to-quote-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((product) => (
            <tr key={product.equipmentId}>
              <td>
                <img
                  src={product.imageload?.[0]?.imageName || '/default-image.jpg'}
                  alt={product.title}
                  className="add-to-quote-product-image"
                />
              </td>
              <td>{product.title}</td>
              <td>
                <input
                  type="number"
                  className="add-to-quote-quantity-input"
                  value={product.quantity || 1}
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(product.equipmentId, parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <button
                  className="add-to-quote-delete-button"
                  onClick={() => handleDelete(product.equipmentId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddToQuote;
