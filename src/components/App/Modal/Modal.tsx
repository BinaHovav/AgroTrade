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
        <p>
          <strong>Contract:</strong> {product.contract}
        </p>
        <p>
          <strong>Season:</strong> {product.season}
        </p>
        <p>
          <strong>Shipping:</strong> {product.shipping}
        </p>
        <p>
          <strong>Food Name:</strong> {product.foodName}
        </p>
        <p>
          <strong>Variety:</strong> {product.variety}
        </p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Seller:</strong> {product.seller}
        </p>
        <p>
          <strong>Price:</strong> {product.price} {product.currencyId}
        </p>
        <p>
          <strong>Box Weight:</strong> {product.boxWeight}
        </p>
        <button className="buy-now-button" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Modal;
