import useActions from './use-actions';
import {
  addActiveProduct,
  removeActiveProduct
} from '../redux/active-product-actions';
import { useSelector } from 'react-redux';

/**
 *  custom hook to make using single product state easy
 * @returns single product state and its action creators
 */

const useProduct = () => {
  const actions = useActions({ addActiveProduct, removeActiveProduct });
  const productState = useSelector((state) => state.activeProduct);

  return { productState, ...actions };
};

export default useProduct;
