import storeApi from '../api/storeApi';

/**
 * this is all products related actions and action creators
 * we have add products action
 * we are using redux thunk so we can fetch data here!
 */

export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const ERORR_PRODUCTS = 'ERROR_PRODUCTS';

export const addProducts = () => async (dispatch) => {
  const respone = await storeApi.get('/products', {
    params: {
      offset: 10,
      limit: 12
    }
  });
  const data = respone.data;

  dispatch({
    type: ADD_PRODUCTS,
    payload: data
  });
};

// export const errorProducts = () => ({ type: ERORR_PRODUCTS });
