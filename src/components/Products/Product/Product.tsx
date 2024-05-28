import React from 'react';
import formatPrice from 'utils/formatPrice';
import { IProduct } from 'models';
import { useCart } from 'contexts/cart-context';
import { Link } from 'react-router-dom';

import './styles.scss';

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { openCart, addProduct } = useCart();
  const { sku, variety, foodName, price, currencyId, seasonType, image } =
    product;

  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 });
    openCart();
  };

  const formattedPrice = formatPrice(price, currencyId);

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
            <b>{formattedPrice.substring(0, formattedPrice.length - 4)}</b>
            <b>{formattedPrice.substring(formattedPrice.length - 4)}</b>
            <b>- AVG</b>
          </p>
        </div>
        {/* <button className="buy-button" onClick={handleAddProduct} tabIndex={-1}>
          Add to cart
        </button> */}
      </Link>
    </div>
  );
};

export default Product;
