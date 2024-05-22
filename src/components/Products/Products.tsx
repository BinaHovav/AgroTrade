import React, { useState } from 'react';
import { IProduct } from 'models';
import Product from './Product';
import FoodMenu from 'components/FoodMenu/FoodMenu';
import Header from 'components/Header/Header';
import * as S from './style';

interface IProps {
  products: IProduct[];
}

const name = 'bob';

const organizeProducts = (products: IProduct[]) => {
  const organized: Record<
    string,
    Record<string, Record<string, IProduct[]>>
  > = {};
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

const Products = ({ products }: IProps) => {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [foodGroupToDisplay, setFoodGroupToDisplay] =
    useState<string>('Fruits');

  const handleSearch = (term: string) => {
    setSearchTerm(term);

    if (term) {
      const lowerCaseTerm = term.toLowerCase();
      const filtered = products.filter((product) =>
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

  const productsToDisplay = searchTerm ? filteredProducts : products;
  const organizedProductsToDisplay = organizeProducts(productsToDisplay);

  return (
    <>
      <Header onSearch={handleSearch} />
      <S.Main>
        <FoodMenu onChange={handleChangedFoodGroup} />
        {foodGroupToDisplay && organizedProductsToDisplay?.[foodGroupToDisplay]
          ? Object.keys(organizedProductsToDisplay[foodGroupToDisplay]).map(
              (category) => (
                <div key={category}>
                  <S.CategoryHeading>{category}</S.CategoryHeading>
                  <S.Container>
                    {Object.keys(
                      organizedProductsToDisplay[foodGroupToDisplay][category]
                    ).map((foodName) => (
                      <div key={foodName}>
                        {organizedProductsToDisplay[foodGroupToDisplay][
                          category
                        ][foodName].map((product) => (
                          <Product product={product} key={product.sku} />
                        ))}
                      </div>
                    ))}
                  </S.Container>
                </div>
              )
            )
          : null}
      </S.Main>
    </>
  );
};

export default Products;
