import React, { KeyboardEvent } from 'react';
import formatPrice from 'utils/formatPrice';
import { IProduct } from 'models';
import { useCart } from 'contexts/cart-context';
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

  const handleAddProductWhenEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.code === 'Space') {
      addProduct({ ...product, quantity: 1 });
      openCart();
    }
  };

  const formattedPrice = formatPrice(price, currencyId);

  return (
    <div className="food-card" onKeyUp={handleAddProductWhenEnter} tabIndex={1}>
      <img
        src={image}
        alt={variety}
        style={{
          width: '200px',
          height: '160px',
          objectFit: 'contain',
          paddingLeft: '50px',
          paddingBottom: '-20px',
        }}
      />
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
    </div>
  );
};

export default Product;
