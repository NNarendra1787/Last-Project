import React from "react";
import { Link } from "react-router-dom";
import './DropDown.css'

function DropPad() {
  return (
    <>
      <div className="DropPad">
        <ul>
          <li>
            <Link to="/vivo">Vivo</Link>
          </li>
          <li>
            <Link to="/Redmi">Redmi</Link>
          </li>
          <li>
            <Link to="/onepluse">OnePlus</Link>
          </li>
          <li>
            <Link to="/samsung">Samsung</Link>
          </li>
          <li>
            <Link to="/iphone">Iphone</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DropPad;