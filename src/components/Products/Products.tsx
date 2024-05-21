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
  const organized: Record<string, Record<string, IProduct[]>> = {};

  products.forEach((product) => {
    const { category, foodName } = product;

    if (!organized[category]) {
      organized[category] = {};
    }
    if (!organized[category][foodName]) {
      organized[category][foodName] = [];
    }

    organized[category][foodName].push(product);
  });

  return organized;
};

const Products = ({ products }: IProps) => {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

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

  const productsToDisplay = searchTerm ? filteredProducts : products;
  const organizedProductsToDisplay = organizeProducts(productsToDisplay);

  return (
    <>
      <Header onSearch={handleSearch}/>
      <S.Main>
        <FoodMenu />
        {Object.keys(organizedProductsToDisplay).map((category) => (
          <div key={category}>
            <S.CategoryHeading>{category}</S.CategoryHeading>
            <S.Container>
              {Object.keys(organizedProductsToDisplay[category]).map((foodName) => (
                <div key={foodName}>
                  {organizedProductsToDisplay[category][foodName].map((product) => (
                    <Product product={product} key={product.sku} />
                  ))}
                </div>
              ))}
            </S.Container>
          </div>
        ))}
      </S.Main>
    </>
  );
};

export default Products;
