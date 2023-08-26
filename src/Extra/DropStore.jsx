import React from "react";
import { Link } from "react-router-dom";
import './DropDown.css'

function DropStore({onSelectCat, onSelectBand}) {
  return (
    <>
      <div className="DropStore">
        <ul>
          <li>
            <Link to="/Laptops" className='ph' >Laptops</Link>
          </li>
          <li>
            <Link to="/Watch" className='ph' >Watch</Link>
          </li>
          <li>
            <Link to="/headphone" className='ph' >HeadPhone</Link>
          </li>
          <li>
            <Link to="/Keybord" className='ph'>Keybord</Link>
          </li>
          <li>
            <Link to="/Mouse" className='ph' >Mouse</Link>
          </li>
          <li>
            <Link to="/Speaker" className='ph' >Speaker</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DropStore;
