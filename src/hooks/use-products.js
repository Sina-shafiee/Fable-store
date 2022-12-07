import React from 'react';
import useActions from './use-actions';
import { addProducts, errorProducts } from '../redux/products-actions';
import { useSelector } from 'react-redux';

const useProducts = () => {
  const actions = useActions({ addProducts, errorProducts });
  const productsState = useSelector((state) => state.productsState);

  return { productsState, ...actions };
};

export default useProducts;
