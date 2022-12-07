import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';

import useProduct from './hooks/use-product';

import Header from './components/Header';
import ProductPage from './routes/ProductPage';
import Root from './routes/Root';

function App() {
  const { removeActiveProduct } = useProduct();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      removeActiveProduct();
    }
  }, [location]);
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;