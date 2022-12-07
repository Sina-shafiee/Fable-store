import storeApi from '../api/storeApi';

export const ADD_ACTIVE_PRODUCT = 'ADD_ACTIVE_PRODUCT';
export const REMOVE_ACTIVE_PRODUCT = 'REMOVE_ACTIVE_PRODUCT';

export const addActiveProduct = (id) => async (dispatch) => {
  const response = await storeApi.get(`/products/${id}`);

  const data = response.data;

  dispatch({ type: ADD_ACTIVE_PRODUCT, payload: data });
};

export const removeActiveProduct = () => ({ type: REMOVE_ACTIVE_PRODUCT });
