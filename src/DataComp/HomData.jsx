import React, { useEffect, useState } from "react";
import axios from "axios";
import "../responsive.css"
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../RD/cartAction";

function HomData({product}) {
  const [data, setData] = useState([]);

  // const {title2,image, price,crossPrice,rating} = product
  const dispatch = useDispatch();
  const selector = useSelector((state)=> state.cart.cartItems)
  const navi = useNavigate()

  const handalAddToCart = (product)=>{
    dispatch(addToCart(product))
  }

  const handalRemoveFromCart = (productId)=>{
    dispatch(removeFromCart(productId))
  }

  useEffect(() => {
    const url = "https://king-store.onrender.com/api/user/total";

    axios.get(url).then((resp) => {
      setData(resp.data);
      // console.log("data checking", resp.data);
    });
  },[data]);
  return (
    <section className="HoHome">
      <h2 className="homeTitle">Best Seller</h2>
      <hr className="myline" />
      <section className="homeData">
        <div className="homeBox">
          {data
            .filter((e) => e.cat === "tv" && e.no === 10)
            .map((item, ind) => (
              <div key={ind}>
                <img src={item.image} alt="/" className="homeimg" />
                <div className="midCard">
                  <Link to={`/ClickPage/${item.title2}`} state={item}>
                    <h3 className="homeText">{item.title2}</h3>
                  </Link>
                  <h4 className="itsPrice">Sale Price: {item.price}</h4>
                  <h5 className="notPrice">
                    Original Price: {item.crossPrice}
                  </h5>
                  <h4 className="fa fa-star checked">{item.rating}</h4>
                </div>
                <div className="AddToCart" onClick={()=> navi('/NCart')}>
                  <button className="cart" onAddToCart={handalAddToCart}>AddToCart</button>
                </div>
              </div>
            ))}
        </div>
        <div className="homeBox">
          {data
            .filter((e) => e.cat === "phone" && e.no === 3)
            .map((item, ind) => (
              <div key={ind}>
                <img src={item.image} alt="/" className="homeimg" />
                <div className="midCard">
                <Link to={`/ClickPage/${item.title2}`} state={item}>
                    <h3 className="homeText">{item.title2}</h3>
                  </Link>
                  <h4 className="itsPrice">Sale Price: {item.price}</h4>
                  <h5 className="notPrice">
                    Original Price: {item.crossPrice}
                  </h5>
                  <h4 className="fa fa-star checked">{item.rating}</h4>
                </div>
                <div className="AddToCart">
                  <button className="cart">AddToCart</button>
                </div>
              </div>
            ))}
        </div>
        <div className="homeBox">
          {data
            .filter((e) => e.cat === "Laptops" && e.no === 5)
            .map((item, ind) => (
              <div key={ind}>
                <img src={item.image} alt="/" className="homeimg" />
                <div className="midCard">
                <Link to={`/ClickPage/${item.title2}`} state={item}>
                    <h3 className="homeText">{item.title2}</h3>
                  </Link>
                  <h4 className="itsPrice">Sale Price: {item.price}</h4>
                  <h5 className="notPrice">
                    Original Price: {item.crossPrice}
                  </h5>
                  <h4 className="fa fa-star checked">{item.rating}</h4>
                </div>
                <div className="AddToCart">
                  <button className="cart">AddToCart</button>
                </div>
              </div>
            ))}
        </div>
        <div className="homeBox">
          {data
            .filter((e) => e.cat === "Laptops" && e.no === 6)
            .map((item, ind) => (
              <div key={ind}>
                <img src={item.image} alt="/" className="homeimg" />
                <div className="midCard">
                <Link to={`/ClickPage/${item.title2}`} state={item}>
                    <h3 className="homeText">{item.title2}</h3>
                  </Link>
                  <h4 className="itsPrice">Sale Price: {item.price}</h4>
                  <h5 className="notPrice">
                    Original Price: {item.crossPrice}
                  </h5>
                  <h4 className="fa fa-star checked">{item.rating}</h4>
                </div>
                <div className="AddToCart">
                  <button className="cart">AddToCart</button>
                </div>
              </div>
            ))}
        </div>
        <div className="homeBox">
          {data
            .filter((e) => e.cat === "phone" && e.no === 2)
            .map((item, ind) => (
              <div key={ind}>
                <img src={item.image} alt="/" className="homeimg" />
                <div className="midCard">
                <Link to={`/ClickPage/${item.title2}`} state={item}>
                    <h3 className="homeText">{item.title2}</h3>
                  </Link>
                  <h4 className="itsPrice">Sale Price: {item.price}</h4>
                  <h5 className="notPrice">
                    Original Price: {item.crossPrice}
                  </h5>
                  <h4 className="fa fa-star checked">{item.rating}</h4>
                </div>
                <div className="AddToCart">
                  <button className="cart">AddToCart</button>
                </div>
              </div>
            ))}
        </div>
        <div className="homeBox">
          {data
            .filter((e) => e.cat === "ipad" && e.no === 7)
            .map((item, ind) => (
              <div key={ind}>
                <img src={item.image} alt="/" className="homeimg" />
                <div className="midCard">
                <Link to={`/ClickPage/${item.title2}`} state={item}>
                    <h3 className="homeText">{item.title2}</h3>
                  </Link>
                  <h4 className="itsPrice">Sale Price: {item.price}</h4>
                  <h5 className="notPrice">
                    Original Price: {item.crossPrice}
                  </h5>
                  <h4 className="fa fa-star checked">{item.rating}</h4>
                </div>
                <div className="AddToCart">
                  <button className="cart">AddToCart</button>
                </div>
              </div>
            ))}
        </div>
        <div className="homeBox">
          {data
            .filter((e) => e.cat === "headphone" && e.no === 8)
            .map((item, ind) => (
              <div key={ind}>
                <img src={item.image} alt="/" className="homeimg" />
                <div className="midCard">
                <Link to={`/ClickPage/${item.title2}`} state={item}>
                    <h3 className="homeText">{item.title2}</h3>
                  </Link>
                  <h4 className="itsPrice">Sale Price: {item.price}</h4>
                  <h5 className="notPrice">
                    Original Price: {item.crossPrice}
                  </h5>
                  <h4 className="fa fa-star checked">{item.rating}</h4>
                </div>
                <div className="AddToCart">
                  <button className="cart">AddToCart</button>
                </div>
              </div>
            ))}
        </div>
        <div className="homeBox">
          {data
            .filter((e) => e.cat === "phone" && e.no === 1)
            .map((item, ind) => (
              <div key={ind}>
                <img src={item.image} alt="/" className="homeimg" />
                <div className="midCard">
                  <Link to={`/ClickPage/${item.title2}`} state={item}>
                    <h3 className="homeText">{item.title2}</h3>
                  </Link>
                  <h4 className="itsPrice">Sale Price: {item.price}</h4>
                  <h5 className="notPrice">
                    Original Price: {item.crossPrice}
                  </h5>
                  <h4 className="fa fa-star checked">{item.rating}</h4>
                </div>
                <div className="AddToCart">
                  <button className="cart">AddToCart</button>
                </div>
              </div>
            ))}
        </div>
        <div className="homeBox">
          {data
            .filter((e) => e.cat === "headphone" && e.no === 9)
            .map((item, ind) => (
              <div key={ind}>
                <img src={item.image} alt="/" className="homeimg" />
                <div className="midCard">
                <Link to={`/ClickPage/${item.title2}`} state={item}>
                    <h3 className="homeText">{item.title2}</h3>
                  </Link>
                  <h4 className="itsPrice">Sale Price: {item.price}</h4>
                  <h5 className="notPrice">
                    Original Price: {item.crossPrice}
                  </h5>
                  <h4 className="fa fa-star checked">{item.rating}</h4>
                </div>
                <div className="AddToCart">
                  <button className="cart">AddToCart</button>
                </div>
              </div>
            ))}
        </div>
        <div className="homeBox">
          {data
            .filter((e) => e.cat === "Laptops" && e.no === 4)
            .map((item, ind) => (
              <div key={ind}>
                <img src={item.image} alt="/" className="homeimg" />
                <div className="midCard">
                <Link to={`/ClickPage/${item.title2}`} state={item}>
                    <h3 className="homeText">{item.title2}</h3>
                  </Link>
                  <h4 className="itsPrice">Sale Price: {item.price}</h4>
                  <h5 className="notPrice">
                    Original Price: {item.crossPrice}
                  </h5>
                  <h4 className="fa fa-star checked">{item.rating}</h4>
                </div>
                <div className="AddToCart">
                  <button className="cart">AddToCart</button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </section>
  );
}

export default HomData;
