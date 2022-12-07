import { useState } from 'react';
import CartList from '../components/CartList';
import OrderForm from '../components/OrderForm';
import useCart from '../hooks/use-cart';

const Cart = () => {
  const { cart } = useCart();

  const findTotal = () => {
    return cart.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);
  };

  const total = findTotal();

  return (
    <section className='container mx-auto p-4 flex flex-wrap-reverse gap-14 justify-center items-end'>
      <OrderForm />
      {cart.length > 0 ? (
        <div className='min-w-[300px]'>
          <CartList />
          <div className='flex px-4 mt-8'>
            <div className='w-[86px]'></div>
            <div className='flex justify-between items-center w-full'>
              <h2>Summary</h2>
              <h2>{total.toFixed(2)} $</h2>
            </div>
          </div>
          <div className='flex px-4'>
            <div className='w-[86px]'></div>
            <div className='flex justify-between items-center w-full'>
              <h2>Delivery</h2>
              <h2>0 $</h2>
            </div>
          </div>
          <div className='flex px-4'>
            <div className='w-[86px]'></div>
            <div className='flex justify-between items-center w-full'>
              <h2>Promocode</h2>
              <h2>0 $</h2>
            </div>
          </div>
          <div className='flex px-4'>
            <div className='w-[86px]'></div>
            <div className='flex font-semibold text-lg justify-between items-center w-full'>
              <h2>Total</h2>
              <h2>{total.toFixed(2)} $</h2>
            </div>
          </div>
          <div className='flex px-4 mt-4'>
            <div className='w-[86px]'></div>
            <div className='flex justify-between items-center w-full'>
              <input
                className='h-8 border-[1px] border-black p-2'
                type='number'
                placeholder='Enter promocode'
              />
              <button className='py-1 px-4 bg-black rounded-sm text-white'>
                Apply
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='mt-8 text-center'>
          <p>Your cart is empty</p>
        </div>
      )}
    </section>
  );
};

export default Cart;
