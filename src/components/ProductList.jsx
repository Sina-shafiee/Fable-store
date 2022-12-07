import ProductCard from './ProductCard';

const ProductList = ({ productsData }) => {
  return (
    <section className='container mx-auto my-4 gap-4 p-4 flex flex-wrap justify-around items-center'>
      {productsData.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </section>
  );
};

export default ProductList;
