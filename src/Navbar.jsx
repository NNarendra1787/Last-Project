import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import mainLogo from "./Img/myImplogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import cart from "./Img/cart.png";
// import search from "./Img/search.png";
import Special from "./Router/Special";
import Userlogo from "./Img/profile_icon.svg";
import SearchIcon from "./Img/search_icon.svg";

import DropStore from "./Extra/DropStore";
import DropPh from "./Extra/DropPh";
import DropPad from "./Extra/DropPad";
import DropLap from "./Extra/DropLap";
import DropAcc from "./Extra/DropAcc";
import { NavLink } from "react-router-dom";

// import "./backup.css";
import "./Navbar.css"
import "./responsive.css"

function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  // const [search, setSearch] = useState(false);

  const [logregi, setLogRegi] = useState(false);

  // const navi = useNavigate();

  const infomation = localStorage.getItem("name");
  // console.log("name aaya",infomation);
  const [storing, setStoring] = useState(false);
  const [ipad, setIpad] = useState(false);
  const [iphone, setIphone] = useState(false);
  const [laptop, setLaptop] = useState(false);
  const [accesseries, setAccessires] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <section className="MainNav">
        <div className="midNav">
          <div className="logoPart">
            <img src={mainLogo} alt="logo" className="mainLogo" />
            <h1 id="shop">KingStore</h1>
          </div>
          <div
            id="Navigation"
            className={click ? "nav-menu active" : "nav-menu"}
          >
            <button className="btn">
              <NavLink
                to={"/"}
                className="links nav-link"
                onClick={handleClick}
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "firebrick",
                })}
              >
                HOME
              </NavLink>
            </button>
            <button
              className="btn"
              onMouseOver={() => {
                setStoring(true);
              }}
              onMouseLeave={() => {
                setStoring(false);
              }}
            >
              <NavLink
                to={"/store"}
                className="links nav-link"
                onClick={handleClick}
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "firebrick",
                })}
              >
                STORE
              </NavLink>
            </button>
            {storing && <DropStore />}
            <button
              className="btn"
              onMouseOver={() => {
                setIphone(true);
              }}
              onMouseLeave={() => {
                setIphone(false);
              }}
            >
              <NavLink
                to={"/iPhone"}
                className="links nav-link"
                onClick={handleClick}
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "firebrick",
                })}
              >
                PHONES
              </NavLink>
            </button>
            {iphone && <DropPh />}
            <button
              className="btn"
              onMouseOver={() => {
                setIpad(true);
              }}
              onMouseLeave={() => {
                setIpad(false);
              }}
            >
              <NavLink
                to={"/iPad"}
                className="links nav-link"
                onClick={handleClick}
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "firebrick",
                })}
              >
                IPAD
              </NavLink>
            </button>
            {ipad && <DropPad />}
            <button
              className="btn"
              onMouseOver={() => {
                setLaptop(true);
              }}
              onMouseLeave={() => {
                setLaptop(false);
              }}
            >
              <NavLink
                to={"/Macbook"}
                className="links nav-link"
                onClick={handleClick}
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "firebrick",
                })}
              >
                LAPTOPS
              </NavLink>
            </button>
            {laptop && <DropLap />}
            <button
              className="btn"
              onMouseOver={() => {
                setAccessires(true);
              }}
              onMouseLeave={() => {
                setAccessires(false);
              }}
            >
              <NavLink
                to={"/Access"}
                className="links nav-link"
                onClick={handleClick}
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "firebrick",
                })}
              >
                ACCESSERIES
              </NavLink>
            </button>
            {accesseries && <DropAcc />}
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
                  <button
                    className="myButton"
                    onClick={() => {
                      setSearchInput((def) => !def);
                    }}
                  >
                    <img src={SearchIcon} alt="/" />
                  </button>
                </div>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <section className="extra">
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
