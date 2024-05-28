import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import FilterAndSort from 'components/FilterAndSort/FilterAndSort';
import Products from 'components/Products';
import Cart from 'components/Cart';
import Header from 'components/Header/Header';
import FoodPage from 'components/FoodPage/FoodPage';
import useProductFilters from 'contexts/products-context/useProductFilter';
import * as S from './style';

function App() {
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

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <FilterAndSort
        uniqueRegions={uniqueRegions}
        selectedRegions={selectedRegions}
        handleRegionChange={handleRegionChange}
        handleSortByChange={handleSortByChange}
        handleSortOrderChange={handleSortOrderChange}
      />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              organizedProducts={organizedProducts}
              foodGroupToDisplay={foodGroupToDisplay}
            />
          }
        />
        <Route path="/product/:foodName" element={<FoodPage />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
