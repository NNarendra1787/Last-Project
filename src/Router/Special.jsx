import React from "react";
import { Link, Routes } from "react-router-dom";
// import Register from "./Register";
// import LoginData from "./LoginData";
import '../Extra/DropDown.css'

function Special() {
  return (
    <>
    <div className="logRegi">
      <ul>
        <li><Link to="/register"  className='ph'>Register</Link></li>
        <li><Link to="/login"  className='ph'>Login</Link></li>
        <li><Link to="/logout"  className='ph'>Logout</Link></li>
      </ul>
    </div>

    <Routes>
      
    </Routes>
    </>
  );
}

export default Special;
