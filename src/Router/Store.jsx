import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../DataComp/Product";
import { Link, useNavigate } from "react-router-dom";
import "../DataComp/Home.css";
import { addToCart, removeFromCart } from "../RD/cartAction";
import axios from "axios";

const Store = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [displayedStore, setDisplayedStore] = useState([]);
  const [visibleProductCount, setVisibleProductCount] = useState(12);
  // const [selectedCategory, setSelectedCategory] = useState("smartphones"); // Default to 'all'
  // const [selectedBrand, setSelectedBrand] = useState(""); // Default to 'all'
  // const [setTotalProducts] = useState(0); // Track total number of products

  const dispatch = useDispatch();
  useEffect(() => {
    // let url1 = "https://king-store.onrender.com/api/user/total";
    let url1 = "http://localhost:5000/api/user/category2/Acc";
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
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <div className="product-container">
        {displayedProducts.slice(0,12).map((product, index) => (
          <Product
            key={index}
            product={product}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../DataComp/Home.css";
// import { useDispatch } from "react-redux";
// import { add } from "../RDX/SliceCart";

// function Store() {
//   const [data, setData] = useState([]);
//   const dispatch = useDispatch();
//   const navi = useNavigate();

//   useEffect(() => {
//     const url = "https://king-store.onrender.com/api/user/Acc";

//     axios.get(url).then((resp) => {
//       setData(resp.data);
//     });
//   }, [data]);

//   const AddToCart = (post) => {
//     dispatch(add(post));
//   };

//   return (
//     <>
//       Store
//       <section className="RoHome">
//         {/* <h2 className="homeTitle">Best Seller</h2> */}
//         {/* <hr className="myline" /> */}
//         <section className="RomeData">
//           <div className="RomeBox">
//             {data
//               .filter((e) => e.cat === "Redmi" && e.no === 17)
//               .map((post, ind) => {
//                 const { image, title2, price, crossPrice, rating } = post;
//                 return (
//                   <div key={ind}>
//                     <img src={image} alt="/" className="homeimg" />
//                     <div className="ReRemidCard">
//                       <Link to={`/ClickPage/${title2}`} state={post}>
//                         <h3 className="homeText">{title2}</h3>
//                       </Link>
//                       <h4 className="itsPrice">Sale Price: {price}</h4>
//                       <h5 className="notPrice">Original Price: {crossPrice}</h5>
//                       <h4 className="fa fa-star checked">{rating}</h4>
//                     </div>
//                     <div className="ReAddToCart" onClick={() => navi("/cart")}>
//                       <button className="cart" onClick={() => AddToCart(post)}>
//                         AddToCart
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//           </div>
//           <div className="RomeBox">
//             {data
//               .filter((e) => e.cat === "Keybord" && e.no === 6)
//               .map((post, ind) => {
//                 const { image, title2, price, crossPrice, rating } = post;
//                 return (
//                   <div key={ind}>
//                     <img src={image} alt="/" className="homeimg" />
//                     <div className="ReRemidCard">
//                       <Link to={`/ClickPage/${title2}`} state={post}>
//                         <h3 className="homeText">{title2}</h3>
//                       </Link>
//                       <h4 className="itsPrice">Sale Price: {price}</h4>
//                       <h5 className="notPrice">Original Price: {crossPrice}</h5>
//                       <h4 className="fa fa-star checked">{rating}</h4>
//                     </div>
//                     <div className="ReAddToCart" onClick={() => navi("/cart")}>
//                       <button className="cart" onClick={() => AddToCart(post)}>
//                         AddToCart
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//           </div>
//           <div className="RomeBox">
//             {data
//               .filter((e) => e.cat === "Speaker" && e.no === 1)
//               .map((post, ind) => {
//                 const { image, title2, price, crossPrice, rating } = post;
//                 return (
//                   <div key={ind}>
//                     <img src={image} alt="/" className="homeimg" />
//                     <div className="ReRemidCard">
//                       <Link to={`/ClickPage/${title2}`} state={post}>
//                         <h3 className="homeText">{title2}</h3>
//                       </Link>
//                       <h4 className="itsPrice">Sale Price: {price}</h4>
//                       <h5 className="notPrice">Original Price: {crossPrice}</h5>
//                       <h4 className="fa fa-star checked">{rating}</h4>
//                     </div>
//                     <div className="ReAddToCart" onClick={() => navi("/cart")}>
//                       <button className="cart" onClick={() => AddToCart(post)}>
//                         AddToCart
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//           </div>
//           <div className="RomeBox">
//             {data
//               .filter((e) => e.cat === "headphone" && e.no === 26)
//               .map((post, ind) => {
//                 const { image, title2, price, crossPrice, rating } = post;
//                 return (
//                   <div key={ind}>
//                     <img src={image} alt="/" className="homeimg" />
//                     <div className="ReRemidCard">
//                       <Link to={`/ClickPage/${title2}`} state={post}>
//                         <h3 className="homeText">{title2}</h3>
//                       </Link>
//                       <h4 className="itsPrice">Sale Price: {price}</h4>
//                       <h5 className="notPrice">Original Price: {crossPrice}</h5>
//                       <h4 className="fa fa-star checked">{rating}</h4>
//                     </div>
//                     <div className="ReAddToCart" onClick={() => navi("/cart")}>
//                       <button className="cart" onClick={() => AddToCart(post)}>
//                         AddToCart
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//           </div>
//           <div className="RomeBox">
//             {data
//               .filter((e) => e.cat === "Dell" && e.no === 31)
//               .map((post, ind) => {
//                 const { image, title2, price, crossPrice, rating } = post;
//                 return (
//                   <div key={ind}>
//                     <img src={image} alt="/" className="homeimg" />
//                     <div className="ReRemidCard">
//                       <Link to={`/ClickPage/${title2}`} state={post}>
//                         <h3 className="homeText">{title2}</h3>
//                       </Link>
//                       <h4 className="itsPrice">Sale Price: {price}</h4>
//                       <h5 className="notPrice">Original Price: {crossPrice}</h5>
//                       <h4 className="fa fa-star checked">{rating}</h4>
//                     </div>
//                     <div className="ReAddToCart" onClick={() => navi("/cart")}>
//                       <button className="cart" onClick={() => AddToCart(post)}>
//                         AddToCart
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//           </div>
//           <div className="RomeBox">
//             {data
//               .filter((e) => e.cat === "Mouse" && e.no === 8)
//               .map((post, ind) => {
//                 const { image, title2, price, crossPrice, rating } = post;
//                 return (
//                   <div key={ind}>
//                     <img src={image} alt="/" className="homeimg" />
//                     <div className="ReRemidCard">
//                       <Link to={`/ClickPage/${title2}`} state={post}>
//                         <h3 className="homeText">{title2}</h3>
//                       </Link>
//                       <h4 className="itsPrice">Sale Price: {price}</h4>
//                       <h5 className="notPrice">Original Price: {crossPrice}</h5>
//                       <h4 className="fa fa-star checked">{rating}</h4>
//                     </div>
//                     <div className="ReAddToCart" onClick={() => navi("/cart")}>
//                       <button className="cart" onClick={() => AddToCart(post)}>
//                         AddToCart
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//           </div>
//         </section>
//       </section>
//     </>
//   );
// }

// export default Store;
