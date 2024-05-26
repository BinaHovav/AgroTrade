import { useEffect } from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from '../../pages/Home';

import Recruiter from 'components/Recruiter';
import Filter from 'components/Filter';
import Products from 'components/Products';
import Cart from 'components/Cart';
import Loader from 'components/Loader';

import { useProducts } from 'contexts/products-context';

import * as S from './style';

function App() {
  const { isFetching, products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
        //TODO
        {/* <Route path="/products/pineapple" element={<Pineapple />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Router>
    // <S.Container>s
    //   {isFetching && <Loader />}
    //   <Recruiter />
    //   <S.TwoColumnGrid>
    //     <S.Side>
    //       <Filter />
    //     </S.Side>
    //     <S.Main>
    //       <S.MainHeader>
    //         <p>{products?.length} Product(s) found</p>
    //       </S.MainHeader>
    //       <Products products={products} />
    //     </S.Main>
    //   </S.TwoColumnGrid>
    //   <Cart />
    // </S.Container>
  );
}

export default App;
