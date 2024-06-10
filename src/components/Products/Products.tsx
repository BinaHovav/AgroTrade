import React from 'react';
import { IProduct } from 'models';
import ProductList from './ProductList/ProductList';
import FoodMenu from 'components/FoodMenu/FoodMenu';
import './styles.scss';

interface IProps {
  organizedProducts: Record<string, Record<string, Record<string, IProduct[]>>>;
  foodGroupToDisplay: string;
}

const Products = ({ organizedProducts, foodGroupToDisplay }: IProps) => {
  return (
    <div className="products-container">
      <FoodMenu onChange={() => {}} />
      <ProductList
        organizedProducts={organizedProducts}
        foodGroupToDisplay={foodGroupToDisplay}
      />
    </div>
  );
};

export default Products;
