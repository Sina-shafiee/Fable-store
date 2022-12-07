import { useRef, useState } from 'react';
import logo from '../assets/images/logo.svg';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleCheckRef = useRef(null);

  const handleToggleClick = () => {
    if (toggleCheckRef.current.checked) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };
  return (
    <header className='navbar z-30 p-2 sm:p-4 flex justify-between sticky top-0 left-0 bg-white bg-opacity-95 backdrop-blur container mx-auto'>
      <img className='w-28 p-0 btn btn-ghost sm:w-32' src={logo} alt='logo' />

      <label
        className='btn sm:hidden p-1 btn-ghost swap swap-rotate'
        onClick={handleToggleClick}
      >
        <input ref={toggleCheckRef} type='checkbox' />

        <svg
          className='swap-off fill-black'
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='28'
          viewBox='0 0 512 512'
        >
          <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
        </svg>

        <svg
          className='swap-on fill-black'
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='28'
          viewBox='0 0 512 512'
        >
          <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
        </svg>
      </label>
      {showMenu ? (
        <section className='fixed sm:static top-14 right-6'>
          <ul className='menu bg-white lg:menu-normal w-52  rounded-box sm:bg-transparent sm:flex-row'>
            <li>
              <a className='sm:hover:rounded-md text-base md:text-lg xl:text-xl'>
                Home
              </a>
            </li>
            <li>
              <a className='sm:hover:rounded-md md:text-lg xl:text-xl'>Cart</a>
            </li>
          </ul>
        </section>
      ) : null}
    </header>
  );
};

export default Header;
