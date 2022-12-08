import { useEffect } from 'react';
import useCart from '../hooks/use-cart';

import CartTotal from '../components/CartTotal';
import OrderForm from '../components/OrderForm';
import { useLocation } from 'react-router';

const Cart = () => {
  const { cart } = useCart();
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <section className='container mx-auto p-4 flex flex-wrap-reverse gap-14 justify-center items-end'>
      <OrderForm />
      {cart.length > 0 ? (
        <CartTotal />
      ) : (
        <div className='mt-8 text-center'>
          <p>Your cart is empty</p>
        </div>
      )}
    </section>
  );
};

export default Cart;
