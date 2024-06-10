import React, { useState } from 'react';
import './styles.scss';

interface IModalProps {
  product: any;
  onClose: () => void;
  onBuyNow: (product: any) => void;
}

const Modal: React.FC<IModalProps> = ({ product, onClose, onBuyNow }) => {
  const [isBuyNow, setIsBuyNow] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!product) return null;

  const handleBuyNow = () => {
    onBuyNow(product);
    setIsBuyNow(true);
  };

  const handleConfirm = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      onClose(); 
    }, 3000); 
  };

  return (
    <>
      {showConfirmation ? (
        <div className="confirmation-popup">
          <p>Your order has been placed, please check your email for further details.</p>
        </div>
      ) : (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onClose}>
              X
            </button>
            {isBuyNow ? (
              <div className="buy-now-content">
                <h1>Confirmation</h1>
                <strong>Order Number: 00017438823Y</strong>
                <br></br>
                <strong>Received By: </strong>
                <strong>B-Fresh</strong>
                <br></br>
                <strong>Address: HaBanim 11, Ashdod, Israel</strong>
                <br></br>
                <strong>Containter Size: 40FT</strong>
                <br></br>
                <strong>No. of containers: 1</strong>
                <br></br>
                <strong>No. of pallets: 24</strong>
                <br></br>
                <strong>Total Weight: 12,720</strong>
                <br></br>
                <strong>Total price: $22,464</strong>
                <br></br>
                <p>Shipping method: CIF</p>
                <button className="button" onClick={handleConfirm}>
                  Confirm
                </button>
              </div>
            ) : (
              <>
                <img
                  className="main-img"
                  src={product.image}
                  alt={product.variety}
                />
                <h1>
                  <strong>{product.variety}</strong>
                </h1>
                <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
                <div className="grid-container">
                  <div className="item">
                    <img src="https://img.icons8.com/?size=100&id=119&format=png&color=000000" alt="icon"/>
                    <strong>Price:</strong> {product.price} {product.currencyId}
                  </div>
                  <div className="item">
                    <img src="https://img.icons8.com/?size=100&id=7820&format=png&color=000000" alt="icon"/>
                    <strong>Seller:</strong> {product.seller}
                  </div>
                  <div className="item">
                    <img
                      src="https://img.icons8.com/?size=100&id=wyvdHU0bHnzE&format=png&color=000000" alt="icon"
                      className="icon"
                    />
                    <strong>Box Weight:</strong>
                    {product.boxWeight}
                  </div>
                  <div className="item">
                    <img
                      src="https://img.icons8.com/?size=100&id=t5GRNS5yIsHP&format=png&color=000000" alt="icon"
                      className="icon"
                    />
                    <strong className="item">Contract:</strong> {product.contract}
                  </div>
                  <div className="item">
                    <img
                      src="https://img.icons8.com/?size=100&id=bYsqgmZHHeq8&format=png&color=000000" alt="icon"
                      className="icon"
                    />
                    <strong>Season:</strong> {product.season}
                  </div>
                  <div className="item">
                    <img
                      src="https://img.icons8.com/?size=100&id=17856&format=png&color=000000" alt="icon"
                      className="icon"
                    />
                    <strong>Shipping:</strong> {product.shipping}
                  </div>
                </div>
                <div className="description">
                  <strong>Description:</strong> {product.description}
                </div>
                <div className="description">
                  <strong>Length:</strong> {product.length}
                </div>
                <div className="description">
                  <strong>Width:</strong> {product.width}
                </div>
                <div className="options">
                  <div className="container-select">
                    No. of containers
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>
                  <div className="pallete-select">
                    No. of pallets
                    <select>
                      <option value="12">12</option>
                      <option value="24">24</option>
                    </select>
                  </div>
                </div>
                <div className="button-container">
                  <button className="button" onClick={handleBuyNow}>
                    Buy Now
                  </button>
                  <button className="button" onClick={handleBuyNow}>
                    Contact Seller
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
