import React from "react";
import { Link } from "react-router-dom";
import './DropDown.css'

function DropPad() {
  return (
    <>
      <div className="DropPad">
        <ul>
          <li>
            <Link to="/VivoP">Vivo</Link>
          </li>
          <li>
            <Link to="/RedmiP">Redmi</Link>
          </li>
          <li>
            <Link to="/OnepluseP">OnePlus</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DropPad;
