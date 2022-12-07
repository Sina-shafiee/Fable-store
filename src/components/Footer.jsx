import { LazyLoadImage } from 'react-lazy-load-image-component';

import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';

import logo from '../assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className='container mx-auto footer items-center py-12 px-4'>
      <div className='items-center flex flex-wrap gap-4'>
        <LazyLoadImage src={logo} alt='logo' className='w-36' />
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl md:text-2xl'>
        <a className='cursor-pointer'>
          <BsTwitter />
        </a>
        <a className='cursor-pointer'>
          <BsYoutube />
        </a>
        <a className='cursor-pointer'>
          <BsFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
