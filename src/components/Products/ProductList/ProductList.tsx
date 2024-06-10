import React from 'react';
import { IProduct } from 'models';
import Product from '../Product/Product';
import './styles.scss';

interface IProductListProps {
  organizedProducts: Record<string, Record<string, Record<string, IProduct[]>>>;
  foodGroupToDisplay: string;
}

const ProductList = ({
  organizedProducts,
  foodGroupToDisplay,
}: IProductListProps) => {
  return (
    <>
      {foodGroupToDisplay && organizedProducts?.[foodGroupToDisplay]
        ? Object.keys(organizedProducts[foodGroupToDisplay]).map((category) => (
            <div className="products-list" key={category}>
              <h2 className="category-heading">{category}</h2>
              <div className="container">
                {Object.keys(
                  organizedProducts[foodGroupToDisplay][category]
                ).map((foodName) => {
                  const firstProduct =
                    organizedProducts[foodGroupToDisplay][category][
                      foodName
                    ][0];
                  return (
                      <Product product={firstProduct} key={firstProduct.sku} />
                  );
                })}
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default ProductList;
