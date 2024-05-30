import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from 'models';
import './styles.scss';

interface IProps {
  product: IProduct;
}

const Product: React.FC<IProps> = ({ product }) => {
  const { sku, variety, foodName, price, currencyId, seasonType, image } =
    product;

  const toUrlFriendly = (str: string) => str.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="food-card">
      <Link to={`/product/${toUrlFriendly(foodName)}`}>
        <img src={image} alt={variety} />
        <p className="season-type">{seasonType}</p>
        <p className="variety">{foodName}</p>
        <div className="price">
          <p className="val">
            <b>{currencyId}</b>
            <b>{price}</b>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
