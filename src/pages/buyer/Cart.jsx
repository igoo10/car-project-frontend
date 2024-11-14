// Cart.js
import React from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'; // Import icons from react-icons
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import '../../styles/Cart.css';


const key = import.meta.env.VITE_FLUTTER_WAVE
const Cart = ({ cart, setCart }) => {
  const estimatedTotal = cart.reduce((total, item) => total + item.price, 0);
  console.log(estimatedTotal)
  const config = {
    public_key: key,
    tx_ref: Date.now(),
    amount: estimatedTotal,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'DriveMart',
      description: 'Payment for items in cart',
      logo: '',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Proceed to Checkout',
    callback: (response) => {
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };


  const handleIncreaseQuantity = (car) => {
    const updatedCart = cart.map((item) =>
      item.id === car.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (car) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === car.id) {
          const newQuantity = (item.quantity || 1) - 1;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      })
      .filter((item) => item.quantity > 0); // Remove items with quantity 0

    setCart(updatedCart);
  };

  const handleRemoveItem = (car) => {
    const updatedCart = cart.filter((item) => item.id !== car.id);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  if (cart.length === 0) {
    return <div className="cart-empty">Your cart is empty</div>;
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((car) => (
          <div key={car.id} className="cart-item">
            <img src={car.image} alt={car.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4 className="cart-item-name">{car.name}</h4>
              <p className="cart-item-price">Price: ${car.price.toFixed(2)}</p>
              <div className="cart-item-controls">
                <button onClick={() => handleDecreaseQuantity(car)} className="icon-btn">
                  <FaMinus />
                </button>
                <span className="quantity-display">{car.quantity || 1}</span>
                <button onClick={() => handleIncreaseQuantity(car)} className="icon-btn">
                  <FaPlus />
                </button>
                <button onClick={() => handleRemoveItem(car)} className="icon-btn remove-btn">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total Items: {cart.reduce((total, item) => total + (item.quantity || 1), 0)}</p>
        <p>Total Price: ${calculateTotal().toFixed(2)}</p>
        <FlutterWaveButton className='checkout-btn' {...fwConfig} />
        {/* <button className="checkout-btn">Proceed to Checkout</button> */}
      </div>
    </div>
  );
};

export default Cart;
