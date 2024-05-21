import { KeyboardEvent } from 'react';

import formatPrice from 'utils/formatPrice';

import { IProduct } from 'models';

import { useCart } from 'contexts/cart-context';

import * as S from './style';

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
    <S.Container onKeyUp={handleAddProductWhenEnter} sku={sku} tabIndex={1}>
      <img
        src={image}
        alt={variety}
        style={{
          width: '260px',
          height: '200px',
          objectFit: 'contain',
          paddingLeft: '50px',
          paddingBottom: '-20px',
        }}
      />
      <S.SeasonType>{seasonType}</S.SeasonType>
      <S.Variety>{foodName}</S.Variety>
      <S.Price>
        <S.Val>
          <b>{currencyId}</b>
          <b>{formattedPrice.substring(0, formattedPrice.length - 4)}</b>
          <b>{formattedPrice.substring(formattedPrice.length - 4)}</b>
          <b>- AVG</b>
        </S.Val>
      </S.Price>
      {/* <S.BuyButton onClick={handleAddProduct} tabIndex={-1}>
        Add to cart
      </S.BuyButton> */}
    </S.Container>
  );
};

export default Product;
