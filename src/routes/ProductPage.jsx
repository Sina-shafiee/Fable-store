import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLocation, useParams } from 'react-router';
import useCart from '../hooks/use-cart';
import useProduct from '../hooks/use-product';

const ProductPage = () => {
  const { pathname } = useLocation();
  const { addToCart } = useCart();
  const { id } = useParams();
  const { productState, addActiveProduct } = useProduct();
  const { title, price, image, description, rating } = productState;

  const handleAddToCartClick = () => {
    const product = {
      title,
      price,
      image,
      description,
      rating,
      id,
      count: 1
    };

    addToCart(product);
  };

  useEffect(() => {
    addActiveProduct(id);
  }, []);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <main className='container mx-auto min-h-[70vh] flex items-center justify-center p-4'>
      {Object.keys(productState).length ? (
        <section className='flex flex-col items-center justify-center lg:px-40 sm:grid sm:grid-cols-2 place-content-center'>
          <LazyLoadImage
            className='w-full h-full object-fill p-10 sm:w-[300px] sm:p-0'
            src={image}
            alt={title}
          />
          <section className='sm:flex flex-col justify-around'>
            <section>
              <h2 className='title font-semibold'>{title}</h2>
              <p className='mt-2'>{price} $</p>
              <p className='my-4'>{description}</p>
            </section>
            <button
              onClick={handleAddToCartClick}
              className='max-w-max my-4 btn btn-sm'
            >
              Add to cart
            </button>
          </section>
        </section>
      ) : (
        <h2>loading..</h2>
      )}
    </main>
  );
};

export default ProductPage;
