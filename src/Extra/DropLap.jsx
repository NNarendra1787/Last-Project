import React from "react";
import { Link } from "react-router-dom";
import './DropDown.css'

function DropLap() {
  return (
    <>
      <div className="DropLap">
        <ul className="unlist">
          <li>
            <Link to="/lenovo">Lenovo</Link>
          </li>
          <li>
            <Link to="/macbook">Lenovo</Link>
          </li>
          <li>
            <Link to="/">Lenovo</Link>
          </li>
          <li>
            <Link to="/lenovo">Lenovo</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DropLap;
