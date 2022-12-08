import React from 'react';
import useActions from './use-actions';
import { addProducts } from '../redux/products-actions';
import { useSelector } from 'react-redux';

/**
 *  custom hook to make using all products state easy
 * @returns all products state and its action creators
 */

const useProducts = () => {
  const actions = useActions({ addProducts });
  const products = useSelector((state) => state.products);

  return { products, ...actions };
};

export default useProducts;
