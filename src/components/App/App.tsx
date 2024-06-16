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
import useProductFilters from 'contexts/products-context/useProductFilter';
import ContactPage from 'pages/ContactPage/ContactPage';
import AboutPage from 'pages/AboutPage/AboutPage';
import './styles.scss';

const App: React.FC = () => {
  const {
    organizedProducts,
    foodGroupToDisplay,
    uniqueRegions,
    selectedRegions,
    handleSearch,
    handleSortOrderChange,
    handleSortByChange,
    handleRegionChange,
    uniqueSellers, 
    selectedSellers, 
    handleSellerChange,
  } = useProductFilters();

  const products = Object.values(organizedProducts).flatMap((foodGroup) =>
    Object.values(foodGroup).flatMap((category) =>
      Object.values(category).flat()
    )
  );

  const location = useLocation();
  const showFilterAndSort = !['/', '/contact', '/about'].includes(location.pathname);

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="main-content">
        {showFilterAndSort && (
          <FilterAndSort
            uniqueRegions={uniqueRegions}
            selectedRegions={selectedRegions}
            handleRegionChange={handleRegionChange}
            handleSortByChange={handleSortByChange}
            handleSortOrderChange={handleSortOrderChange}
            uniqueSellers={uniqueSellers} 
            selectedSellers={selectedSellers} 
            handleSellerChange={handleSellerChange} 
          />
        )}
        <div className="content-container">
          <Routes>
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
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
