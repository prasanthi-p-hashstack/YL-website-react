import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './AddToQuotePage.css'
import { updateQuantity,removeFromQuote } from '../../redux/actions/productActions';
import { Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddTOQuotePage = () => {
    const carts = useSelector((state) => state.allProducts.carts);// Get the products in the quote
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] =useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] =useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate()
;

    console.log("carts from state", carts);
    if (carts.length === 0) {
        <p>No Products are added to the quote</p>
    }

    // Handle delete product from the quote
    const handleDeleteButton = (productId) => {
        dispatch(removeFromQuote(productId));
    };

    // Handle quantity update
    const handleQuantityChange = (productId, quantity) => {
        if (quantity >= 1) {
            dispatch(updateQuantity(productId, quantity))
        }
    };

    
    if (carts.length === 0) {
        <p>No Products are added to the quote</p>
    }
    return (
        <div>
        {carts.length >=1  ? (
        <div className='add-to-quote content-width'>
            <table className='add-to-quote-table'>
                <thead>
                    <tr>
                        <th></th>
                        <th>image</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {carts.map((product) => (
                        <tr>
                            <td>
                                <div class="products-delete-icon">
                                    <i class="fa fa-close"
                                        onClick={() => handleDeleteButton(product.equipmentId)}
                                    ></i>
                                </div>
                            </td>
                            <td>
                                <img src={product.imageload?.[0].imageName || ''}
                                    alt={product.title}
                                    className='add-to-quote-image'
                                />
                            </td>
                            <td>{product.title}</td>
                            <td>
                                <input
                                    type='number'
                                    className='add-to-quote-quantity-input'
                                    value={product.quantity || 1}
                                    min="1"
                                    onChange={(e) => handleQuantityChange(product.equipmentId, parseInt(e.target.value))}
                                />
                            </td>

                        </tr>
                    )
                    )}
                </tbody>
                    <button className='add-to-quote-page-buttons button-global1'
                               onClick={()=>navigate('/shop')}            
                    > Return to Shop</button>
            </table>
            {/* send the requestform */}
            <div className='request-form'>
            <h2>Send the Request</h2>
            <Stack spacing={2}>
                <TextField
                    value={firstName}
                    label='First Name'
                    onChange={(e)=>{setFirstName(e.target.value)}}
                    size="small"
                    fullWidth
                    required                
                />
                 <TextField
                    value={lastName}
                    label='Last Name'
                    onChange={(e)=>{setLastName(e.target.value)}}
                    size="small"
                    fullWidth             
                />
                 <TextField
                    value={phoneNumber}
                    label='Phone Number'
                    onChange={(e)=>{setPhoneNumber(e.target.value)}}
                    size="small"
                    type='number'
                    fullWidth
                    required                
                />
                 <TextField
                    value={email}
                    label='Email'
                    onChange={(e)=>{setEmail(e.target.value)}}
                    size="small"
                    fullWidth
                    required 
                    type='email'               
                />
                 <TextField
                    value={message}
                    label='Message'
                    onChange={(e)=>{setMessage(e.target.value)}}
                    size="small"
                    fullWidth
               
                    type='textFeild' 
                    multiline 
                    rows={4}             
                />            

            </Stack>
            <button className='button-global1'>Send Your Request</button>
            </div>
        </div>
                ):
                <p className='add-to-quote-no-products content-width'>No Products are added to the quote</p>
            }
            <p className='add-to-quote-page-text'>If you have added any products listed on website into the Quote List you can submit the request by clicking on the <strong>Send Your Request button</strong>.<br/>
If your quote list is empty – you can still submit the request to give a quote by clicking on the <strong>Request a Quote</strong> button at the end of this page.<br/>
Our <strong>Sales Engineers</strong> will take up your requirement to give you a quote.  
</p>
            </div>   
    )
}

export default AddTOQuotePage;