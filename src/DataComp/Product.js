import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { addToCart } from "../RD/cartAction";
import axios from "axios";

const Product = ({ product }) => {
  const { title2, image, price, crossPrice, rating } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const navi = useNavigate();
  const handleAddToCart = () => {
    // if (isAuthenticated) {
    dispatch(addToCart(product));
    axios.post("http://localhost:5000/api/user/addingtocart",{...product})
    // toast.success("Added to cart", {
    //   position: "top-right",
    //   autoClose: 200,
    //   theme: "dark",
    //   hideProgressBar: "true",
    // });
    // } else {
    // toast.error("Please log in to add to cart", {
    //   position: "top-right",
    //   autoClose: 300,
    //   theme: "dark",
    //   hideProgressBar: true,
    // });
    // }
  };
  return (
    <div>
      <section className="oHome">
        <div className="omeData">
          <div product={product} className="RomeBox">
            <img src={image} alt="/" className="homeimg" />
            <div className="RemidCard">
              <Link to={`/ClickPage/${title2}`} state={product}>
                <h3 className="homeText">{title2}</h3>
              </Link>
              <h4 className="itsPrice">Sale Price: {price}</h4>
              <h5 className="notPrice">Original Price: {crossPrice}</h5>
              <h4 className="fa fa-star checked">{rating}</h4>
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
