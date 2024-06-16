import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IProduct } from 'models';
import Modal from 'components/Modal/Modal';
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
    <div>
      <nav className="breadcrumb">
        <Link to="/products">Products</Link> &gt; <span>{capitalizedFoodName}</span>
      </nav>
      
    <div className="container">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <div
            key={index}
            className="food-card"
            onClick={() => handleProductClick(product)}
          >
            <img className="image" src={product.image} alt={product.variety} />
            <div className='product-details'>
              <p>{product.variety}</p>
              <p>Seller: {product.seller}</p>
              <p className="price">
               $ {product.price} / kg 
              </p>
            </div>
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
