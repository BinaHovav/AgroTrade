import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from 'models';
import './styles.scss';

interface IProps {
  product: IProduct;
}

const Product: React.FC<IProps> = ({ product }) => {
  const { variety, foodName, price, seasonType, image } =
    product;

  const toUrlFriendly = (str: string) => str.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="food-card">
      <Link to={`/product/${toUrlFriendly(foodName)}`}>
        <img src={image} alt={variety} />
        <p className="season-type">{seasonType}</p>
        <div className="product-details">
          <p>{foodName}</p>
          <p>
            $ {price} / kg - AVG
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
