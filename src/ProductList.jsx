// ProductList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const plantsArray = [
    // Array of plant objects with properties: name, image, description, cost
    { name: 'Rose', image: 'rose.jpg', description: 'Beautiful rose', cost: 10.99, quantity: 1 },
    { name: 'Tulip', image: 'tulip.jpg', description: 'Bright tulip', cost: 12.99, quantity: 1 },
    // Add more plants as needed
  ];

  // Get total quantity of items in the cart
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 })); // Add item to the cart with initial quantity
  };

  return (
    <div className="product-grid">
      <h2>Available Plants</h2>
      <div>
        {plantsArray.map(plant => (
          <div key={plant.name} className="product-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p>${plant.cost.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div>Total Items in Cart: {totalQuantity}</div> {/* Display total items in cart */}
    </div>
  );
};

export default ProductList;

