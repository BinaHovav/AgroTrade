import React, { useState } from 'react';
import { IProduct } from 'models';
import Product from './Product';
import FoodMenu from 'components/FoodMenu/FoodMenu';
import Header from 'components/Header/Header';
import * as S from './style';

interface IProps {
  products: IProduct[];
}

const organizeProducts = (products: IProduct[]) => {
  const organized: Record<string, Record<string, Record<string, IProduct[]>>> = {};
  products.forEach((product) => {
    const { category, foodName, foodGroup } = product;
    if (!organized[foodGroup]) {
      organized[foodGroup] = {};
    }
    if (!organized[foodGroup][category]) {
      organized[foodGroup][category] = {};
    }
    if (!organized[foodGroup][category][foodName]) {
      organized[foodGroup][category][foodName] = [];
    }

    organized[foodGroup][category][foodName].push(product);
  });

  return organized;
};

const getUniqueRegions = (products: IProduct[]) => {
  const regions = new Set(products.map(product => product.region));
  return Array.from(regions);
};

const sortProducts = (products: IProduct[], sortBy: 'price' | 'volume', order: 'asc' | 'desc') => {
  return [...products].sort((a, b) =>
    order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
  );
};

const Products = ({ products }: IProps) => {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [foodGroupToDisplay, setFoodGroupToDisplay] = useState<string>('Fruits');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortBy, setSortBy] = useState<'price' | 'volume'>('price');
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);

    if (term) {
      const lowerCaseTerm = term.toLowerCase();
      const filtered = products.filter(product =>
        product.foodName.toLowerCase().startsWith(lowerCaseTerm)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleChangedFoodGroup = (foodGroup: string) => {
    setFoodGroupToDisplay(foodGroup);
  };

  const handleSortOrderChange = (order: 'asc' | 'desc') => {
    setSortOrder(order);
  };

  const handleSortByChange = (sortBy: 'price' | 'volume') => {
    setSortBy(sortBy);
  };

  const handleRegionChange = (region: string) => {
    setSelectedRegions(prevSelectedRegions =>
      prevSelectedRegions.includes(region)
        ? prevSelectedRegions.filter(r => r !== region)
        : [...prevSelectedRegions, region]
    );
  };

  const productsToDisplay = searchTerm ? filteredProducts : products.filter(product => 
    selectedRegions.length === 0 || selectedRegions.includes(product.region)
  );
  const sortedProductsToDisplay = sortProducts(productsToDisplay, sortBy, sortOrder);
  const organizedProductsToDisplay = organizeProducts(sortedProductsToDisplay);

  const uniqueRegions = getUniqueRegions(products);

  return (
    <>
      <Header onSearch={handleSearch} />
      <S.Main>
        <S.Sidebar>
          {uniqueRegions.map(region => (
            <S.CheckboxContainer key={region}>
              <label>
                <S.CheckboxInput
                  type="checkbox"
                  value={region}
                  checked={selectedRegions.includes(region)}
                  onChange={() => handleRegionChange(region)}
                />
                {region}
              </label>
            </S.CheckboxContainer>
          ))}
          <S.ButtonContainer>
            <S.StyledButton onClick={() => { handleSortByChange('price'); handleSortOrderChange('asc'); }}>Sort by Price: Low to High</S.StyledButton>
            <S.StyledButton onClick={() => { handleSortByChange('price'); handleSortOrderChange('desc'); }}>Sort by Price: High to Low</S.StyledButton>
            <S.StyledButton onClick={() => { handleSortByChange('volume'); handleSortOrderChange('asc'); }}>Sort by Volume: Low to High</S.StyledButton>
            <S.StyledButton onClick={() => { handleSortByChange('volume'); handleSortOrderChange('desc'); }}>Sort by Volume: High to Low</S.StyledButton>
          </S.ButtonContainer>
        </S.Sidebar>
        <S.Content>
          <FoodMenu onChange={handleChangedFoodGroup} />
          {foodGroupToDisplay && organizedProductsToDisplay?.[foodGroupToDisplay] ? (
            Object.keys(organizedProductsToDisplay[foodGroupToDisplay]).map((category) => (
              <div key={category}>
                <S.CategoryHeading>{category}</S.CategoryHeading>
                <S.Container>
                  {Object.keys(organizedProductsToDisplay[foodGroupToDisplay][category]).map((foodName) => (
                    <div key={foodName}>
                      {organizedProductsToDisplay[foodGroupToDisplay][category][foodName].map((product) => (
                        <Product product={product} key={product.sku} />
                      ))}
                    </div>
                  ))}
                </S.Container>
              </div>
            ))
          ) : null}
        </S.Content>
      </S.Main>
    </>
  );
};

export default Products;
