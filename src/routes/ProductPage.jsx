import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useProduct from '../hooks/use-product';

const ProductPage = () => {
  const { id } = useParams();
  const { productState, addActiveProduct } = useProduct();

  useEffect(() => {
    addActiveProduct(id);
  }, []);

  return (
    <main className='container mx-auto p-4'>
      {Object.keys(productState).length ? (
        <section>
          <img src={productState.image} alt='image' />
        </section>
      ) : (
        <h2>loading..</h2>
      )}
    </main>
  );
};

export default ProductPage;
