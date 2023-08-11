import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "./Img/myImplogo.png";
import cart from "./Img/cart.png";
// import search from "./Img/search.png";
import Special from "./Router/Special";
import Userlogo from "./Img/profile_icon.svg";
import SearchIcon from "./Img/search_icon.svg";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  // const [search, setSearch] = useState(false);

  const [logregi, setLogRegi] = useState(false);

  // const navi = useNavigate();

  const infomation = localStorage.getItem("name");
  // console.log("name aaya",infomation);
  return (
    <div>
      <section className="MainNav">
        <div className="midNav">
          <div className="logoPart">
            <img src={mainLogo} alt="logo" className="mainLogo" />
            <h1 id="shop">KingStore</h1>
          </div>
          <section className="extra">
            <div className="research">
              <input
                type="text"
                name="search"
                placeholder="search something"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }} 
              />
              <button className="myButton" onClick={()=>{setSearchInput((def)=> !def)}}><img src={SearchIcon} alt="/" /></button>
            </div>
            <div>
              <img src={cart} alt="cart" className="cart" />
            </div>
            <button
              className="btn changebtn"
              onClick={() => {
                setLogRegi((prev) => !prev);
              }}
            >
              {infomation !== <img src={Userlogo} alt="/" />
                ? `Hi ${infomation}`
                : "Hi User"}
            </button>
            {logregi && <Special />}
          </section>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
