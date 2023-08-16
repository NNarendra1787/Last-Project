import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../DataComp/Home.css";

function LinkPage() {
  const [data, setData] = useState([]);
  // const [loaded, setLoaded] = useState(false)
  const params = useParams();

  const para = params.category;

  const [count, setCount] = useState(5);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/Acc")
      .then((res) => setData(res.data));
  }, [params]);
  console.log("This is data Comming", data);

  return (
    <div>
      LinkPage
      <section className="RoHome">
      <section className="RomeData">
        {data
          .filter((e) => {
            return e.cat === para;
          })
          .map((item, ind) => {
            console.log("params", params);
            console.log("params", data.params);

            if (ind < count) {
              return (
                <div className="RomeBox">
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
                </div>
              );
            }
            else{
                <p onClick={()=>{
                    setCount(count +2)
                }} className="Arrow">
                    Load More ⬇️
                </p>
            }
            //   )
          })}
      </section>
      </section>
    </div>
  );
}

export default LinkPage;
