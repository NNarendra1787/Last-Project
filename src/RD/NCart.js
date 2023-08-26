import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../RD/cartAction";
import { increaseQuantity, decreaseQuantity } from "../RD/cartAction";
import axios from "axios";
// import Logo from './Logo';
// import Navbar from './Navbar';
function NCart() {
  const [cartData, setCartData] = useState([]);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch(); 
  const individualItemTotal = (item) => item.price * item.quantity;
  const totalPrice = cartItems.reduce(
    (total, item) => total + individualItemTotal(item),
    0
  );
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId)); // Dispatch the action to remove item from cart
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {

    const currentItem = cartItems.find(item => item.id === itemId);
    if (currentItem && currentItem.quantity > 1) {
      dispatch(decreaseQuantity(itemId));
    } else {
      dispatch(removeFromCart(itemId)); // Remove the item when quantity is 0 or less
    }
  };
  
const clearPrice = parseInt(totalPrice, 10);
console.log(clearPrice);

const fetchCartData = async () => {
  try {
    const response = await axios.get(
    'http://localhost:5000/api/user/fetchcart'
    );
    setCartData(response.data.Result);
  } catch (error) {
    console.error("Error fetching cart data:", error);
  }
};
  useEffect(()=>{
    fetchCartData();
  })
  return (
    <>
    <div className="cart-container">
      <h2 className="nameCart" >Cart</h2>
      {cartData && cartData.length  > 0 ? (
        <div className="cards">
          {console.log(cartData)}
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-item-details">
                <h3>{item.title2}</h3>
                {/* <p>{item.cat}</p> */}
                <p>Price: {item.price} Rs</p>
                <p>Price: {item.crossPrice} Rs</p>
                <div className="quantity-section">
                  <button
                    className="quantity-button"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <p className="quantity-text">Quantity: {item.quantity}</p>
                  <button
                    className="quantity-button"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="remove-from-cart"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="total-price">
            <p className="totalPrice">Total Price:  {totalPrice} ₹</p>
            <button
                className="remove-from-cart"

              >
                Checkout
              </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div></>
  );
}

export default NCart;