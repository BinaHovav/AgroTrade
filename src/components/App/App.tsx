import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Home from 'pages/Home/Home';
import FilterAndSort from 'components/FilterAndSort/FilterAndSort';
import Products from 'components/Products';
import Header from 'components/Header/Header';
import FoodPage from 'components/FoodPage/FoodPage';
import { ProductsProvider } from 'contexts/products-context';
import useProductFilters from 'contexts/products-context/useProductFilter';
import ContactPage from 'pages/ContactPage/ContactPage';
import AboutPage from 'pages/AboutPage/AboutPage';

const App: React.FC = () => {
  const {
    organizedProducts,
    foodGroupToDisplay,
    uniqueRegions,
    selectedRegions,
    handleSearch,
    handleChangedFoodGroup,
    handleSortOrderChange,
    handleSortByChange,
    handleRegionChange,
  } = useProductFilters();

  const products = Object.values(organizedProducts).flatMap((foodGroup) =>
    Object.values(foodGroup).flatMap((category) =>
      Object.values(category).flat()
    )
  );

  const location = useLocation();
  const showHeaderAndFilter = location.pathname !== '/';

  return (
    <>
      {showHeaderAndFilter && (
        <>
          <Header onSearch={handleSearch} />
          <FilterAndSort
            uniqueRegions={uniqueRegions}
            selectedRegions={selectedRegions}
            handleRegionChange={handleRegionChange}
            handleSortByChange={handleSortByChange}
            handleSortOrderChange={handleSortOrderChange}
          />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              organizedProducts={organizedProducts}
              foodGroupToDisplay={foodGroupToDisplay}
            />
          }
        />
        <Route
          path="/product/:foodName"
          element={<FoodPage products={products} />}
        />
        {/* <Route path="*" element={<NoPage />} /> */}
        <Route
          path="/contact"
          element={
            <>
              <ContactPage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <AboutPage />
            </>
          }
        />
      </Routes>
    </>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
