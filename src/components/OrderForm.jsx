import { useState } from 'react';

const OrderForm = () => {
  // form data state
  const [formData, setFormData] = useState({
    city: '',
    deliveryMethod: 'shop',
    address: '',
    loyalty: '',
    name: '',
    phone: '',
    email: '',
    comment: ''
  });

  // destructuring form data
  const {
    city,
    deliveryMethod,
    address,
    loyalty,
    name,
    phone,
    email,
    comment
  } = formData;

  // inputs onchange handler
  const handleFormDataChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form>
      <label className='font-semibold inline-block w-full mt-4'>
        City
        <input
          className='mt-2 font-normal inline-block w-full border-[1px] focus:outline-[1px] border-black h-8 p-4 rounded-sm focus:outline-black focus:shadow-sm'
          placeholder='Enter City'
          type='text'
          name='city'
          id='city'
          value={city}
          onChange={handleFormDataChange}
        />
      </label>

      <h4 className='font-semibold mt-4'>Delivery method</h4>
      <div className='flex justify-center items-center gap-2 mt-2'>
        <button
          onClick={handleFormDataChange}
          type='button'
          name='deliveryMethod'
          value='shop'
          className={`flex-1 border-[1px] border-black rounded-sm py-[0.4rem] transition-all duration-300 ${
            deliveryMethod === 'shop' ? 'bg-black text-white' : null
          }`}
        >
          Shop
        </button>
        <button
          onClick={handleFormDataChange}
          type='button'
          name='deliveryMethod'
          value='home'
          className={`flex-1 border-[1px] border-black rounded-sm py-[0.4rem] transition-all duration-300 ${
            deliveryMethod === 'home' ? 'bg-black text-white' : null
          }`}
        >
          Home
        </button>
      </div>

      <label className='font-semibold inline-block w-full mt-4'>
        Address
        <input
          className='mt-2 font-normal inline-block w-full border-[1px] focus:outline-[1px] border-black h-8 p-4 rounded-sm focus:outline-black focus:shadow-sm'
          placeholder='Enter your address'
          type='text'
          name='address'
          id='address'
          value={address}
          onChange={handleFormDataChange}
        />
      </label>

      <label className='font-semibold inline-block w-full mt-4'>
        Point
        <input
          className='mt-2 font-normal block w-[70%] border-[1px] focus:outline-[1px] border-black h-8 p-4 rounded-sm focus:outline-black focus:shadow-sm'
          placeholder='Enter your loyalty card'
          type='number'
          name='loyalty'
          id='loyalty'
          value={loyalty}
          onChange={handleFormDataChange}
        />
      </label>

      <h4 className='font-semibold mt-4'>Recipient's details</h4>

      <label className='font-semibold inline-block w-full mt-4 text-sm'>
        name
        <input
          className='mt-2 font-normal block w-full border-[1px] focus:outline-[1px] border-black h-8 p-4 rounded-sm focus:outline-black focus:shadow-sm'
          placeholder='Enter your name'
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={handleFormDataChange}
        />
      </label>
      <label className='font-semibold inline-block w-full mt-4 text-sm'>
        phone
        <input
          className='mt-2 font-normal block w-full border-[1px] focus:outline-[1px] border-black h-8 p-4 rounded-sm focus:outline-black focus:shadow-sm'
          placeholder='Enter your number'
          type='number'
          name='phone'
          id='phone'
          value={phone}
          onChange={handleFormDataChange}
        />
      </label>
      <label className='font-semibold inline-block w-full mt-4 text-sm'>
        name
        <input
          className='mt-2 font-normal block w-full border-[1px] focus:outline-[1px] border-black h-8 p-4 rounded-sm focus:outline-black focus:shadow-sm'
          placeholder='Enter your email'
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={handleFormDataChange}
        />
      </label>

      <h4 className='font-semibold mt-4'>Payment method</h4>

      <button
        onClick={handleFormDataChange}
        type='button'
        name='deliveryMethod'
        value='home'
        className={`disabled w-full mt-2 border-[1px] border-black rounded-sm py-[0.4rem] transition-all duration-300 bg-black text-white
          `}
        disabled
      >
        Payment Card
      </button>

      <h4 className='font-semibold mt-4'>Order Comment</h4>

      <textarea
        name='comment'
        value={comment}
        onChange={handleFormDataChange}
        id='comment'
        className='w-full h-24 mt-2 border-[1px] border-black rounded-sm'
      ></textarea>

      <div className='flex items-center mt-8'>
        <input
          type='checkbox'
          defaultValue
          className='w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-black'
        />
        <label
          htmlFor='link-checkbox'
          className='ml-2 text-sm font-medium text-black '
        >
          I agree to the terms of the offer.
        </label>
      </div>

      <button
        onClick={handleFormDataChange}
        type='button'
        name='deliveryMethod'
        value='home'
        className={`disabled w-full mt-2 cursor-not-allowed rounded-sm py-[0.4rem] transition-all duration-300 bg-gray-600 text-white
          `}
        disabled
      >
        Place an order
      </button>
    </form>
  );
};

export default OrderForm;
