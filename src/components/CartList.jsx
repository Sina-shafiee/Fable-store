import useCart from '../hooks/use-cart';
import CartItem from './CartItem';

const CartList = () => {
  const { cart } = useCart();

  return (
    <section className='mt-4 '>
      <h4 className='font-semibold'>Your cart</h4>
      {cart.length > 0 ? (
        <section className='space-y-2 md:space-y-4'>
          {cart.map((product) => {
            return <CartItem key={product.id} {...product} />;
          })}
        </section>
      ) : null}
    </section>
  );
};

export default CartList;
