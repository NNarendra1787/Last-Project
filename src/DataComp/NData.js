import React, { useEffect, useState } from "react";
import Product from "./Product";
// import Store from "../Router/Store";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../RD/cartAction";

function NData() {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [displayedStore, setDisplayedStore] = useState([]);
  const [visibleProductCount, setVisibleProductCount] = useState(12);
  // const [selectedCategory, setSelectedCategory] = useState("smartphones"); // Default to 'all'
  // const [selectedBrand, setSelectedBrand] = useState(""); // Default to 'all'
  // const [setTotalProducts] = useState(0); // Track total number of products

  const dispatch = useDispatch();

  useEffect(() => {
    let url1 = "http://localhost:5000/api/user/category2/total";
    axios
      .get(url1)
      .then((response) => {
        console.log("response", response.data);
        setDisplayedProducts(
          response.data.Result
        );
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
      <h2 className="homeTitle">Best Seller</h2>
      <hr className="myline" />
      <div className="product-container">
        {displayedProducts.map((product, index) => (
          <Product
            key={index}
            product={product}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        ))}
        
      </div>
      {/* <div className="product-container">
      {displayedStore.map((product, index) => (
          <Store
            key={index}
            product={product}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div> */}
    </div>
  );
}

export default NData;
