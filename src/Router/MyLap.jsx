import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../DataComp/Home.css";
import { useDispatch } from "react-redux";
import { add } from "../RDX/SliceCart";
// import filpcart from "../Img/fill_cart.svg"

function MyLap() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const navi = useNavigate();

  useEffect(() => {
    const url = "https://king-store.onrender.com/api/user/lap";

    axios.get(url).then((resp) => {
      setData(resp.data);
    });
  }, [data]);

  const AddToCart = (post) => {
    dispatch(add(post));
  };
  return (
    <div>
      Laptop page
      <section className="RoHome">
        {/* <h2 className="homeTitle">Best Seller</h2> */}
        {/* <hr className="myline" /> */}
        <section className="RomeData">
          <div className="RomeBox">
            {data
              .filter((e) => e.cat === "laptops" && e.no === 1)
              .map((post, ind) => {
                const { image, title2, price, crossPrice, rating } = post;
                return (
                  <div key={ind}>
                    <img src={image} alt="/" className="homeimg" />
                    <div className="RemidCard">
                      <Link to={`/ClickPage/${title2}`} state={post}>
                        <h3 className="homeText">{title2}</h3>
                      </Link>
                      <h4 className="itsPrice">Sale Price: {price}</h4>
                      <h5 className="notPrice">Original Price: {crossPrice}</h5>
                      <h4 className="fa fa-star checked">{rating}</h4>
                    </div>
                    <div className="ReAddToCart" onClick={() => navi("/cart")}>
                      <button className="cart" onClick={() => AddToCart(post)}>
                        AddToCart
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="RomeBox">
            {data
              .filter((e) => e.cat === "laptops" && e.no === 3)
              .map((post, ind) => {
                const { image, title2, price, crossPrice, rating } = post;
                return (
                  <div key={ind}>
                    <img src={image} alt="/" className="homeimg" />
                    <div className="RemidCard">
                      <Link to={`/ClickPage/${title2}`} state={post}>
                        <h3 className="homeText">{title2}</h3>
                      </Link>
                      <h4 className="itsPrice">Sale Price: {price}</h4>
                      <h5 className="notPrice">Original Price: {crossPrice}</h5>
                      <h4 className="fa fa-star checked">{rating}</h4>
                    </div>
                    <div className="ReAddToCart" onClick={() => navi("/cart")}>
                      <button className="cart" onClick={() => AddToCart(post)}>
                        AddToCart
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="RomeBox">
            {data
              .filter((e) => e.cat === "laptops" && e.no === 5)
              .map((post, ind) => {
                const { image, title2, price, crossPrice, rating } = post;
                return (
                  <div key={ind}>
                    <img src={image} alt="/" className="homeimg" />
                    <div className="RemidCard">
                      <Link to={`/ClickPage/${title2}`} state={post}>
                        <h3 className="homeText">{title2}</h3>
                      </Link>
                      <h4 className="itsPrice">Sale Price: {price}</h4>
                      <h5 className="notPrice">Original Price: {crossPrice}</h5>
                      <h4 className="fa fa-star checked">{rating}</h4>
                    </div>
                    <div className="ReAddToCart" onClick={() => navi("/cart")}>
                      <button className="cart" onClick={() => AddToCart(post)}>
                        AddToCart
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="RomeBox">
            {data
              .filter((e) => e.cat === "laptops" && e.no === 2)
              .map((post, ind) => {
                const { image, title2, price, crossPrice, rating } = post;
                return (
                  <div key={ind}>
                    <img src={image} alt="/" className="homeimg" />
                    <div className="RemidCard">
                      <Link to={`/ClickPage/${title2}`} state={post}>
                        <h3 className="homeText">{title2}</h3>
                      </Link>
                      <h4 className="itsPrice">Sale Price: {price}</h4>
                      <h5 className="notPrice">Original Price: {crossPrice}</h5>
                      <h4 className="fa fa-star checked">{rating}</h4>
                    </div>
                    <div className="ReAddToCart" onClick={() => navi("/cart")}>
                      <button className="cart" onClick={() => AddToCart(post)}>
                        AddToCart
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="RomeBox">
            {data
              .filter((e) => e.cat === "laptops" && e.no === 4)
              .map((post, ind) => {
                const { image, title2, price, crossPrice, rating } = post;
                return (
                  <div key={ind}>
                    <img src={image} alt="/" className="homeimg" />
                    <div className="RemidCard">
                      <Link to={`/ClickPage/${title2}`} state={post}>
                        <h3 className="homeText">{title2}</h3>
                      </Link>
                      <h4 className="itsPrice">Sale Price: {price}</h4>
                      <h5 className="notPrice">Original Price: {crossPrice}</h5>
                      <h4 className="fa fa-star checked">{rating}</h4>
                    </div>
                    <div className="ReAddToCart" onClick={() => navi("/cart")}>
                      <button className="cart" onClick={() => AddToCart(post)}>
                        AddToCart
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </section>
    </div>
  );
}

export default MyLap;
