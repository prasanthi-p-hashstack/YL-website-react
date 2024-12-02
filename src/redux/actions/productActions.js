import { ActionTypes } from "../constants/actions-type"

export const setProducts = (products) => {
    return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
}}

export const selectedProduct = (products) => {
    return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products
}}

export const addToQuote = (item) =>{
  console.log('Dispatching ADD_TO_QUOTE action with:', item); // Debug the product payload
    return{
        type:ActionTypes.ADD_TO_QUOTE,
        payload:{...item, quantity: item.quantity || 1}
    }
}
export const removeFromQuote = (productId) => {
    return {
      type: ActionTypes.REMOVE_FROM_QUOTE,
      payload: productId,
    };
  };
  
  export const updateQuantity = (productId, quantity) => {
    return {
      type: ActionTypes.UPDATE_QUANTITY,
      payload: { productId, quantity },
    };
  };
  