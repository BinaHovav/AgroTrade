import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from 'models';
import Modal from 'components/App/Modal/Modal';
import { useProductsContext } from 'contexts/products-context/ProductsContextProvider';
import './styles.scss';

interface IProps {
  products: IProduct[];
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const FoodPage: React.FC<IProps> = ({ products }) => {
  const { foodName } = useParams<{ foodName: string }>();
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const { handleBuyNow } = useProductsContext();

  if (!foodName) {
    return <div>Error: Food name not found</div>;
  }

  const capitalizedFoodName = capitalizeFirstLetter(foodName);

  const filteredProducts = products.filter(
    (product) => product.foodName.toLowerCase() === foodName.toLowerCase()
  );

  const handleProductClick = (product: IProduct) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="food-page">
      <div className="food-page-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="food-card"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.image} alt={product.variety} />
              <p className="variety">{product.variety}</p>
              <p className="seller">Seller: {product.seller}</p>
              <p className="price">
                {product.price} {product.currencyId}
              </p>
            </div>
          ))
        ) : (
          <p>No products found for {capitalizedFoodName}</p>
        )}
      </div>
      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={closeModal}
          onBuyNow={handleBuyNow}
        />
      )}
    </div>
  );
};

export default FoodPage;
