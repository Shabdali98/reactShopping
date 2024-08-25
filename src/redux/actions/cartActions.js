import { ActionTypes } from "../constants/action-types";

// Action to add a product to the cart
export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

// Action to remove a product from the cart
export const removeFromCart = (productId) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: productId,
  };
};
