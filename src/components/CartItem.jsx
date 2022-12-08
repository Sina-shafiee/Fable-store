import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import useCart from '../hooks/use-cart';

const CartItem = ({ image, title, id, price }) => {
  const { removeFromCart } = useCart();

  // handling remove from cart functionalty
  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <section className='flex max-w-md w-full mt-4 shrink gap-4 shadow-sm p2 rounded-sm'>
      <LazyLoadImage
        src={image}
        className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] object-contain'
        alt={title}
      />
      <section className='flex-1'>
        <Link to={`/product/${id}`}>
          <h4 className='font-semibold'>{title}</h4>
        </Link>
        <p className='text-gray-600'>Product id: {id}</p>

        <div className='mt-6 flex justify-between items-center'>
          <p>price: {price} $</p>
          <button onClick={handleRemove} className='btn btn-ghost'>
            Remove
          </button>
        </div>
      </section>
    </section>
  );
};

export default CartItem;
