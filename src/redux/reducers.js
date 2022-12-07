import { ADD_PRODUCTS, ERORR_PRODUCTS } from './products-actions';

import {
  ADD_ACTIVE_PRODUCT,
  REMOVE_ACTIVE_PRODUCT
} from './active-product-actions';

const initalState = {
  productsState: {
    isError: false,
    products: []
  },
  activeProduct: {}
};

export const productsReducer = (
  productState = initalState.productsState,
  action
) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...productState,
        products: action.payload
      };
    case ERORR_PRODUCTS:
      return {
        ...productState,
        isError: true
      };

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
