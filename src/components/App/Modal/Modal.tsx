import React from 'react';
import './styles.scss';

interface IModalProps {
  product: any;
  onClose: () => void;
  onBuyNow: (product: any) => void;
}

const Modal: React.FC<IModalProps> = ({ product, onClose, onBuyNow }) => {
  if (!product) return null;

  const handleBuyNow = () => {
    onBuyNow(product);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <img src={product.image} alt={product.variety} />
        <h1>
          <strong></strong> {product.variety}
          <img
            src="https://img.icons8.com/?size=100&id=81469&format=png&color=000000"
            className="stars-icon"
          />
        </h1>
        <p className="seller">
          <strong>Seller:</strong> {product.seller}
        </p>
        <div className="grid-container">
          <p>
            <strong className="close-description ">Box Weight:</strong>{' '}
            {product.boxWeight}
            <img
              src="https://img.icons8.com/?size=100&id=wyvdHU0bHnzE&format=png&color=000000"
              className="close-icon"
            />
          </p>
          <p>
            <strong className="close-description ">Contract:</strong>{' '}
            {product.contract}
            <img
              src="https://img.icons8.com/?size=100&id=t5GRNS5yIsHP&format=png&color=000000"
              className="close-icon"
            />
          </p>
        </div>
        <div className="flex-container">
          <p>
            <strong className="close-description ">Season:</strong>{' '}
            {product.season}
            <img
              src="https://img.icons8.com/?size=100&id=bYsqgmZHHeq8&format=png&color=000000"
              className="close-icon"
            />
          </p>
          <p>
            <strong className="close-description ">Shipping:</strong>{' '}
            {product.shipping}
            <img
              src="https://img.icons8.com/?size=100&id=17856&format=png&color=000000"
              className="close-icon"
            />
          </p>
        </div>

        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p className="seller">
          <strong>Price:</strong> {product.price} {product.currencyId}
        </p>

        <button className="buy-now-button" onClick={handleBuyNow}>
          Buy Now
        </button>
        <button className="buy-now-button" onClick={handleBuyNow}>
          Contact Seller
        </button>
      </div>
    </div>
  );
};

export default Modal;
