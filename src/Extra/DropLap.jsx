import React from "react";
import { Link } from "react-router-dom";
import './DropDown.css'

function DropLap() {
  return (
    <>
      <div className="DropLap">
        <ul className="unlist">
          <li>
            <Link to="/Lenovo" className='ph'>Lenovo</Link>
          </li>
          <li>
            <Link to="/Macbook" className='ph'>Macbook</Link>
          </li>
          <li>
            <Link to="/Dell" className='ph'>Dell</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DropLap;
