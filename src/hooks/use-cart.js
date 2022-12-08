import useActions from './use-actions';
import { addToCart, removeFromCart } from '../redux/cart-actions';
import { useSelector } from 'react-redux';

/**
 *  custom hook to make using cart state easy
 * @returns cart state and its action creators
 */

const useCart = () => {
  const actions = useActions({ addToCart, removeFromCart });
  const cart = useSelector((state) => state.cart);

  return { cart, ...actions };
};

export default useCart;
