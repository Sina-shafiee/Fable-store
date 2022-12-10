import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { GrPrevious, GrNext } from 'react-icons/gr';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';

import ProductCard from './ProductCard';
import { useRef } from 'react';

const ProductList = ({ productsData }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      className='container mx-auto p-5 relative -mt-10 sm:-mt-2 sm:p-4 md:p-6 lg:p-10 cursor-grab'
      modules={[Navigation]}
      spaceBetween={30}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      navigation
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      breakpoints={{
        768: {
          width: 768,
          slidesPerView: 2
        },
        1400: {
          width: 1400,
          slidesPerView: 4
        }
      }}
      autoplay={true}
      pagination={{ clickable: true }}
    >
      {productsData.map((product) => {
        console.log(product);
        return (
          <SwiperSlide className='mx-auto w-full' key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        );
      })}
      <span
        className='absolute cursor-pointer top-[50%] left-4 translate-y-[-50%] bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 z-20 rounded-full'
        ref={prevRef}
      >
        <GrPrevious />
      </span>
      <span
        className='absolute cursor-pointer select-none top-[50%] right-4 translate-y-[-50%] bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 z-20 rounded-full'
        ref={nextRef}
      >
        <GrNext />
      </span>
    </Swiper>
  );
};

export default ProductList;
