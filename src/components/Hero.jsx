import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import logo from '../assets/images/logo.svg';
import heroImg from '../assets/images/hero.png';

const Hero = () => {
  return (
    <section className='container mx-auto p4 sm:p-0'>
      <div className='flex flex-col justify-center items-center min-h-[12rem] md:min-h-[14rem] my-12'>
        <img className='w-44 mb-2 md:w-52 md:h-16' src={logo} alt='logo' />
        <p className='text-center mt-4 text-lg'>
          Moscow clothing brand that doesn't limit itself to the framework of
          any concepts
        </p>
      </div>
      <LazyLoadImage
        className='mt-8 object-cover min-h-[22rem] md:min-h-[28rem]'
        src={heroImg}
        effect='blur'
        alt='hero image'
      />
    </section>
  );
};

export default Hero;
