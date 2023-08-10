import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Register from "./Register";
import LoginData from "./LoginData";
import '../Extra/DropDown.css'

function Special() {
  return (
    <>
    <div className="logRegi">
      <ul>
        <li><Link to="/register" >Register</Link></li>
        <li><Link to="/login" >Login</Link></li>
        <li><Link to="/logout" >Logout</Link></li>
      </ul>
    </div>

    <Routes>
      
    </Routes>
    </>
  );
}

export default Special;
