import { useEffect } from 'react';

import useProducts from '../hooks/use-products';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Loading from '../components/Loading';
import { useLocation } from 'react-router';

const Root = () => {
  const { products, addProducts } = useProducts();
  const { pathname } = useLocation();

  useEffect(() => {
    addProducts();
  }, []);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <main>
      <Hero />
      <h2 className='container mx-auto p-4 mt-8 text-2xl'>
        - Featuerd Products
      </h2>
      {products.length > 0 ? (
        <ProductList productsData={products} />
      ) : (
        <div className='min-h-[32vh] flex items-center justify-center'>
          <Loading />
        </div>
      )}
    </main>
  );
};

export default Root;
