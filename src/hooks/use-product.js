import useActions from './use-actions';
import {
  addActiveProduct,
  removeActiveProduct
} from '../redux/active-product-actions';
import { useSelector } from 'react-redux';

const useProduct = () => {
  const actions = useActions({ addActiveProduct, removeActiveProduct });
  const productState = useSelector((state) => state.activeProduct);

  return { productState, ...actions };
};

export default useProduct;
