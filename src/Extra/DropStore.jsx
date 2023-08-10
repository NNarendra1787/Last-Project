import React from "react";
import { Link } from "react-router-dom";
import './DropDown.css'

function DropStore() {
  return (
    <>
      <div className="DropStore">
        <ul>
          <li>
            <Link to="/phone">Phones</Link>
          </li>
          <li>
            <Link to="/laptop">Laptops</Link>
          </li>
          <li>
            <Link to="/watch">Watch</Link>
          </li>
          <li>
            <Link to="/shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/chargers">Chargers</Link>

          </li>
        </ul>
      </div>
    </>
  );
}

export default DropStore;
