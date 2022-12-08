import storeApi from '../api/storeApi';

/**
 * this is all single product related actions and action creators
 * we have add active product or remove active product
 * we are using redux thunk so we can fetch data here!
 */

export const ADD_ACTIVE_PRODUCT = 'ADD_ACTIVE_PRODUCT';
export const REMOVE_ACTIVE_PRODUCT = 'REMOVE_ACTIVE_PRODUCT';

export const addActiveProduct = (id) => async (dispatch) => {
  const response = await storeApi.get(`/products/${id}`);
  const data = response.data;

  dispatch({ type: ADD_ACTIVE_PRODUCT, payload: data });
};

export const removeActiveProduct = () => ({ type: REMOVE_ACTIVE_PRODUCT });
