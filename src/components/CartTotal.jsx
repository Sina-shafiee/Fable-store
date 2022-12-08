import useCart from '../hooks/use-cart';

import CartList from './CartList';

const CartTotal = () => {
  const { cart } = useCart();

  const findTotal = () => {
    return cart.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);
  };

  const total = findTotal();

  return (
    <section className='min-w-[300px]'>
      <CartList />
      <section className='flex px-4 mt-8'>
        <section className='w-[86px]'></section>
        <section className='flex justify-between items-center w-full'>
          <h4>Summary</h4>
          <h4>{total.toFixed(2)} $</h4>
        </section>
      </section>
      <section className='flex px-4'>
        <section className='w-[86px]'></section>
        <section className='flex justify-between items-center w-full'>
          <h4>Delivery</h4>
          <h4>0 $</h4>
        </section>
      </section>
      <section className='flex px-4'>
        <section className='w-[86px]'></section>
        <section className='flex justify-between items-center w-full'>
          <h4>Promocode</h4>
          <h4>0 $</h4>
        </section>
      </section>
      <section className='flex px-4'>
        <section className='w-[86px]'></section>
        <section className='flex font-semibold text-lg justify-between items-center w-full'>
          <h4>Total</h4>
          <h4>{total.toFixed(2)} $</h4>
        </section>
      </section>
      <section className='flex px-4 mt-4'>
        <section className='w-[86px]'></section>
        <section className='flex shrink justify-between items-center w-full'>
          <input
            className='h-8 border-[1px] min-w-[22px] border-black p-2'
            type='number'
            placeholder='Enter promocode'
          />
          <button className='py-1 px-4 bg-black rounded-sm text-white'>
            Apply
          </button>
        </section>
      </section>
    </section>
  );
};

export default CartTotal;
