import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router';

import useProduct from './hooks/use-product';

const ProductPage = lazy(() => import('./routes/ProductPage'));
const Footer = lazy(() => import('./components/Footer'));
const Cart = lazy(() => import('./routes/Cart'));

import Root from './routes/Root';
import Header from './components/Header';
import Loading from './components/Loading';
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
        <Route
          path='/product/:id'
          element={
            <Suspense fallback={<Loading />}>
              <ProductPage />
            </Suspense>
          }
        />
        <Route
          path='/cart'
          element={
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
