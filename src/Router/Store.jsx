import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../DataComp/Home.css"

function Store() {
  const [data, setData] = useState([]);

   useEffect(()=>{
    const url = "http://localhost:5000/api/user/Acc";

    axios.get(url).then((resp)=>{
      setData(resp.data);
    })

   },[data])
  return (
    <>
      Store
      <section className="RoHome">
      {/* <h2 className="homeTitle">Best Seller</h2> */}
      {/* <hr className="myline" /> */}
      <section className="RomeData">
        <div className="RomeBox">
          {data
            .filter((e) => e.cat === "Redmi" && e.no === 17)
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
              </div>
            ))}
        </div>
        <div className="RomeBox">
          {data
            .filter((e) => e.cat === "Keybord" && e.no === 6)
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
              </div>
            ))}
        </div>
        <div className="RomeBox">
          {data
            .filter((e) => e.cat === "Speaker" && e.no === 1)
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
              </div>
            ))}
        </div>
        <div className="RomeBox">
          {data
            .filter((e) => e.cat === "headphone" && e.no === 26)
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
              </div>
            ))}
        </div>
        <div className="RomeBox">
          {data
            .filter((e) => e.cat === "Dell" && e.no === 31)
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
              </div>
            ))}
        </div>
        <div className="RomeBox">
          {data
            .filter((e) => e.cat === "Mouse" && e.no === 8)
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
              </div>
            ))}
        </div>
        
      </section>
    </section>

    </>
  );
}

export default Store;
