// CartItem.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, addItem } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem({ name: item.name }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem({ name: item.name }));
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: {/* Calculate total amount here */}</h2>
      <div>
        {cart.map(item => (
          <div key={item.name} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>{item.name}</div>
            <div>${item.cost.toFixed(2)}</div>
            <div>
              <button onClick={() => handleDecrement(item)}>-</button>
              {item.quantity}
              <button onClick={() => handleIncrement(item)}>+</button>
            </div>
            <button onClick={() => handleRemove(item)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={onContinueShopping}>Continue Shopping</button>
      <button onClick={() => alert('Checkout functionality to be added later')}>Checkout</button>
    </div>
  );
};

export default CartItem;




