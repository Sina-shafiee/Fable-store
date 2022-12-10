import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import Loading from '../components/Loading';
import useCart from '../hooks/use-cart';
import useProduct from '../hooks/use-product';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import './ProductPage.css';

const ProductPage = () => {
  const { pathname } = useLocation();
  const { cart, addToCart } = useCart();
  const { id } = useParams();
  const { productState, addActiveProduct } = useProduct();
  const { title, price, images, description, rating } = productState;

  const checkIfAlreadyExist = (id) => {
    const result = cart.filter((product) => product.id === id);
    return result.length === 1 ? true : false;
  };

  const handleAddToCartClick = () => {
    if (checkIfAlreadyExist(id)) {
      return;
    }

    const product = {
      title,
      price,
      images,
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
        <section className='flex flex-col items-center justify-center lg:px-20 sm:grid sm:grid-cols-2 place-content-center'>
          <Swiper
            className='flex justify-center w-full items-center min-h-[300px] max-w-[300px] sm:max-w-[400px] cursor-grab md:min-h-full h-full object-fill p-2'
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
              clickable: true
            }}
            modules={[EffectFade, Pagination]}
          >
            {images.map((img, index) => {
              return (
                <SwiperSlide key={index}>
                  <LazyLoadImage
                    effect='blur'
                    className='w-full'
                    src={img}
                    alt={title}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <section className='sm:flex w-full h-full flex-col justify-around'>
            <section>
              <h2 className='title font-semibold'>{title}</h2>
              <p className='mt-2'>{price} $</p>
              <p className='my-4'>{description}</p>
            </section>
            <button
              onClick={handleAddToCartClick}
              className={`max-w-max my-4 btn btn-sm capitalize ${
                checkIfAlreadyExist(id)
                  ? 'bg-gray-700 cursor-not-allowed'
                  : null
              }`}
            >
              {checkIfAlreadyExist(id) ? 'Added' : 'Add to cart'}
            </button>
          </section>
        </section>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default ProductPage;
