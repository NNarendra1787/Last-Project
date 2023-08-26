import React, { useState } from "react";
import "./RCartP.css";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./SliceCart";

const RCarts = () => {
  const [count, setCount] = useState(1);
  // const [got, setGot] = useState(false);
  const cartProducts = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const removeFromCart = (no) => {
    dispatch(remove(no));
  };

  const increment = () => {
    setCount(count + 1);
  };

  // const priceInc = ()=>{
  //   dispatch(increment(price))
  // }

  const cards = cartProducts.map((post) => {
    const { title, image, price, crossPrice, rating } = post;
    return (
      <>
        <div className="CartPage">
          <div>
            <img src={image} height={200} width={200} alt="/" />
            <div className="incBtn">
              <button
                onClick={() => {
                  setCount(count - 1);
                }}
                className="cbtn"
              >
                -
              </button>
              <p className="cou">{count}</p>
              <button onClick={increment} className="cbtn">
                +
              </button>
            </div>
          </div>
          <div className="CartContent">
            <h3>{title}</h3>
            <h3 className="itsPrice">{price}</h3>
            <h4 className="fa fa-star checked">{rating}</h4>
            <h5 className="notPrice">{crossPrice}</h5>
            <button onClick={() => removeFromCart(post.no)}>Remove Item</button>
          </div>
        </div>
      </>
    );
  });

  return (
    <div>{
       {cards}?<div>{cards}</div>:<div>ok</div>
      }
    </div>
  );
};

export default RCarts;
