import { ADD_PRODUCTS, ERORR_PRODUCTS } from './products-actions';

import {
  ADD_ACTIVE_PRODUCT,
  REMOVE_ACTIVE_PRODUCT
} from './active-product-actions';

import { ADD_TO_CART, REMOVE_FROM_CART } from './cart-actions';

const initalState = {
  products: [],
  activeProduct: {},
  cart: []
};

export const productsReducer = (
  productState = initalState.products,
  action
) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return [...action.payload];

    default:
      return productState;
  }
};

export const activeProductReducer = (
  state = initalState.activeProduct,
  action
) => {
  switch (action.type) {
    case ADD_ACTIVE_PRODUCT:
      return action.payload;
    case REMOVE_ACTIVE_PRODUCT:
      return {};

    default:
      return state;
  }
};

export const cartReducer = (state = initalState.cart, action) => {
  let newData;
  switch (action.type) {
    case ADD_TO_CART:
      newData = [...state, action.payload];
      return newData;
    case REMOVE_FROM_CART:
      newData = state.filter((product) => product.id !== action.payload);
      return newData;
    default:
      return state;
  }
};
