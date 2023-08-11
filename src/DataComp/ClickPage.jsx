import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";

function ClickPage() {
  const locate = useLocation().state;
  const nav = useNavigate();
  return (
    <div>
      <section className="ClickPage">
        <img src={locate.image} alt="/" />
        <div>
          <h3>{locate.title}</h3>
          <h4 className="itsPrice">Sale Price: {locate.price}</h4>
          <h5 className="notPrice">Original Price: {locate.crossPrice}</h5>
          <h4 className="fa fa-star checked">{locate.rating}</h4>
        </div>
        <div>
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </section>
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
