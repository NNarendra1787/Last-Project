import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";
import { useDispatch } from "react-redux";
import { add } from "../RDX/SliceCart";

function ClickPage() {
  const locate = useLocation().state;
  const dispatch = useDispatch();
  const nav = useNavigate();
  const AddToCart = (post)=>{
    dispatch(add(post))
  }
  // const {title,image,price,crossPrice,rating} = post
  return (
    <div>
      
      <section className="ClickPage">
        <img src={locate.image} alt="/" className="sideImg" />
        <div className="midContents">

        <div className="infoContent">
          <h3>{locate.title}</h3>
          <h4 className="itsPrice">Sale Price: {locate.price}</h4>
          <h5 className="notPrice">Original Price: {locate.crossPrice}</h5>
          <h4 className="fa fa-star checked">{locate.rating}</h4>
        </div>
        <div className="myButtons">
          <button className="CartBtn" onClick={()=> nav('/cart')}>Add to Cart</button>
          <button className="CartBtn" onClick={()=> AddToCart()}>Buy Now</button>
        </div>
        </div>
      </section>
          <h4 className="decrp">{locate.decriptions}</h4>
      <p
        onClick={() => {
          nav(-1);
        }}
      >
        ⬅️Come to Home
      </p>
    </div>
  );
}

export default ClickPage;
