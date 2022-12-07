import { useEffect } from 'react';

import useProducts from '../hooks/use-products';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';

const Root = () => {
  const { productsState, addProducts } = useProducts();

  useEffect(() => {
    addProducts();
  }, []);
  
  return (
    <main>
      <Hero />
      <h2 className='container mx-auto p-4 mt-8 text-2xl'>
        - Featuerd Products
      </h2>
      <ProductList productsData={productsState.products} />
    </main>
  );
};

export default Root;