import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../RD/cartAction';
import axios from 'axios';
import Product from './Product';

const LinkPage = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [displayedStore, setDisplayedStore] = useState([]);
  const [visibleProductCount, setVisibleProductCount] = useState(12);
  // const [selectedCategory, setSelectedCategory] = useState("smartphones"); // Default to 'all'
  // const [selectedBrand, setSelectedBrand] = useState(""); // Default to 'all'
  // const [setTotalProducts] = useState(0); // Track total number of products

  const params = useParams();
  const para = params.cat

  const dispatch = useDispatch();
  useEffect(() => {
    // let url1 = "https://king-store.onrender.com/api/user/total";
    let url1 = "http://localhost:5000/api/user/fetchProd";
    axios
      .get(url1)
      .then((response) => {
        console.log("response", response.data);
        setDisplayedProducts(response.data.Result);
        // setTotalProducts(response.data.Result.length);
      })
      // axios.get(url2).then((response)=>{
      //   console.log("response", response.data);
      //   setDisplayedStore(
      //     response.data
      //   )
      // })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [params]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };
  return (
    <div>
      <div className="product-container">
        {displayedProducts.filter((e)=> {return e.cat === para}).map((product, index) => (
          <Product
            key={index}
            product={product}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
    </div>
  )
}

export default LinkPage


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import "../DataComp/Home.css";
// import { useDispatch } from "react-redux";
// import { add } from "../RDX/SliceCart";

// function LinkPage() {
//   const [data, setData] = useState([]);
//   // const [loaded, setLoaded] = useState(false)
//   const params = useParams();

//   const para = params.category;

//   const [count, setCount] = useState(5);
//   const dispatch = useDispatch();
//   const navi = useNavigate();

//   useEffect(() => {
//     axios
//       .get("https://king-store.onrender.com/api/user/Acc")
//       .then((res) => setData(res.data));
//   }, [params]);
//   console.log("This is data Comming", data);

//   const AddToCart =(post)=>{
//     dispatch(add(post))
//   }

//   return (
//     <div>
//       LinkPage
//       <section className="RoHome">
//         <section className="RomeData">
//           {data
//             .filter((e) => {
//               return e.cat === para;
//             })
//             .map((post, ind) => {
//               const { image, title2, price, crossPrice, rating } = post;
//               console.log("params", params);
//               console.log("params", data.params);

//               if (ind < count) {
//                 return (
//                   <div className="RomeBox">
//                     <div key={ind}>
//                       <img src={image} alt="/" className="homeimg" />
//                       <div className="RemidCard">
//                         <Link to={`/ClickPage/${title2}`} state={post}>
//                           <h3 className="homeText">{title2}</h3>
//                         </Link>
//                         <h4 className="itsPrice">Sale Price: {price}</h4>
//                         <h5 className="notPrice">
//                           Original Price: {crossPrice}
//                         </h5>
//                         <h4 className="fa fa-star checked">{rating}</h4>
//                       </div>
//                       <div className="ReAddToCart" onClick={() => navi("/NCart")}>
//                         <button className="cart" onClick={() => AddToCart(post)}>AddToCart</button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               } else {
//                 <p
//                   onClick={() => {
//                     setCount(count + 2);
//                   }}
//                   className="Arrow"
//                 >
//                   Load More ⬇️
//                 </p>;
//               }
//               //   )
//             })}
//         </section>
//       </section>
//     </div>
//   );
// }

// export default LinkPage;
