import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../DataComp/Home.css";
import { useDispatch } from "react-redux";
import { add } from "../RDX/SliceCart";

function LinkPage() {
  const [data, setData] = useState([]);
  // const [loaded, setLoaded] = useState(false)
  const params = useParams();

  const para = params.category;

  const [count, setCount] = useState(5);
  const dispatch = useDispatch();
  const navi = useNavigate();

  useEffect(() => {
    axios
      .get("https://king-store.onrender.com/api/user/Acc")
      .then((res) => setData(res.data));
  }, [params]);
  console.log("This is data Comming", data);

  const AddToCart =(post)=>{
    dispatch(add(post))
  }

  return (
    <div>
      LinkPage
      <section className="RoHome">
        <section className="RomeData">
          {data
            .filter((e) => {
              return e.cat === para;
            })
            .map((post, ind) => {
              const { image, title2, price, crossPrice, rating } = post;
              console.log("params", params);
              console.log("params", data.params);

              if (ind < count) {
                return (
                  <div className="RomeBox">
                    <div key={ind}>
                      <img src={image} alt="/" className="homeimg" />
                      <div className="RemidCard">
                        <Link to={`/ClickPage/${title2}`} state={post}>
                          <h3 className="homeText">{title2}</h3>
                        </Link>
                        <h4 className="itsPrice">Sale Price: {price}</h4>
                        <h5 className="notPrice">
                          Original Price: {crossPrice}
                        </h5>
                        <h4 className="fa fa-star checked">{rating}</h4>
                      </div>
                      <div className="ReAddToCart" onClick={() => navi("/cart")}>
                        <button className="cart" onClick={() => AddToCart(post)}>AddToCart</button>
                      </div>
                    </div>
                  </div>
                );
              } else {
                <p
                  onClick={() => {
                    setCount(count + 2);
                  }}
                  className="Arrow"
                >
                  Load More ⬇️
                </p>;
              }
              //   )
            })}
        </section>
      </section>
    </div>
  );
}

export default LinkPage;
