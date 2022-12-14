import { useNavigate } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductCard = ({ id, title, price, image }) => {
  const navigate = useNavigate();

  return (
    <article className='card w-[300px] hover:scale-105 hover:shadow-lg transition-transform duration-500 h-[419px] grow bg-base-100 shadow-md'>
      <figure>
        <LazyLoadImage
          src={image}
          className='min-h-[349px] max-h-[350px] object-contain'
          alt={title}
        />
      </figure>
      <div
        className='card-body cursor-pointer'
        onClick={() => navigate(`/product/${id}`)}
      >
        <h2 className='card-title text-base'>{title.slice(0, 20)}...</h2>
        <p>{price} $</p>
        <div className='card-actions justify-end'></div>
      </div>
    </article>
  );
};

export default ProductCard;
