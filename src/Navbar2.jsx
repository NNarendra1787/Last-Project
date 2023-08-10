import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import DropStore from "./Extra/DropStore";
import DropPh from "./Extra/DropPh";
import DropPad from "./Extra/DropPad";
import DropLap from "./Extra/DropLap";
import DropAcc from "./Extra/DropAcc";

function Navbar2() {
  const [storing, setStoring] = useState(false);
  const [ipad, setIpad] = useState(false);
  const [iphone, setIphone] = useState(false);
  const [laptop, setLaptop] = useState(false);
  const [accesseries, setAccessires] = useState(false);
  return (
    <div>
      <div className="Navigation">
        <button className="btn">
          <NavLink
            to={"/"}
            className="links"
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
            className="links"
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
            className="links"
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
            className="links"
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
            className="links"
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
            className="links"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "firebrick",
            })}
          >
            ACCESSERIES
          </NavLink>
        </button>
        {accesseries && <DropAcc />}
      </div>
    </div>
  );
}

export default Navbar2;
