import { ActionTypes } from "../constants/actions-type";

const initialState = {
  products: [],
  carts: []
}
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload //replace products with payload
      };
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        products: payload
      }

    case ActionTypes.ADD_TO_QUOTE:
      console.log('ADD_TO_QUOTE case triggered with payload:', payload);
      console.log('Current carts state before update:', state.carts);


      // Check if the product already exists in the cart
      const existingProduct = state.carts.find(
        (item) => item.equipmentId === payload.equipmentId
      );

      if (existingProduct) {
        // Update quantity of the existing product
        console.log('Product exists, updating quantity');
        return {
          ...state,
          carts: state.carts.map((item) =>
            item.equipmentId === payload.equipmentId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Add new product
        console.log('Adding new product to carts');
        return {
          ...state,
          carts: [...state.carts, { ...payload, quantity: 1 }],
        };
      }


    case ActionTypes.REMOVE_FROM_QUOTE:
      return {
        ...state,
        carts: state.carts.filter((product) => product.equipmentId !== payload),
      };

    case ActionTypes.UPDATE_QUANTITY:
      return {
        ...state,
        carts: state.carts.map((product) =>
          product.equipmentId === payload.productId
            ? { ...product, quantity: payload.quantity }
            : product
        ),
      };

    default:
      return state;
  }
}