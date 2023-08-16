import React, { useEffect, useState } from 'react'
import "../DataComp/Home.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

function IPhone() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const url = "http://localhost:5000/api/user/mob"

    axios.get(url).then((resp)=>{
      setData(resp.data);
    })
  },[data])
  return (
    <> 
      Phones
      <section className="RoHome">
      {/* <h2 className="homeTitle">Best Seller</h2> */}
      {/* <hr className="myline" /> */}
      <section className="RomeData">
        <div className="RomeBox">
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
              </div>
            ))}
        </div>
        <div className="RomeBox">
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
              </div>
            ))}
        </div>
        <div className="RomeBox">
          {data
            .filter((e) => e.cat === "phone" && e.no === 5)
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
              </div>
            ))}
        </div>
        <div className="RomeBox">
          {data
            .filter((e) => e.cat === "phone" && e.no === 4)
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
  )
}

export default IPhone