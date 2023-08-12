import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
// import backImage from "../Img/cyber-security-gee883c390_1280.jpg"

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const navigate = useNavigate();

  const HandelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  async function submit(e) {
    e.preventDefault();
    // console.log(data);
    // console.log(data.name);
    try {
      const response = await axios.post(
        "https://masterproject.onrender.com/api/user/register",
        data
      );

      setData({
        name: "",
        email: "",
        contact: "",
        password: "",
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name);
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <section id="midpart">
        <h3>Ragistration Hear First.</h3>
        <form className="fo">
          <label className="inp">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              value={data.name}
              autoComplete="off"
              onChange={HandelChange}
            />
          </label>
          <label className="inp">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              value={data.email}
              autoComplete="email"
              onChange={HandelChange}
            />
          </label>
          <label className="inp">
            Contact No:
            <input
              type="number"
              name="contact"
              placeholder="Enter Your Phone Number"
              value={data.phone}
              autoComplete="off"
              onChange={HandelChange}
            />
          </label>
          <label className="inp">
            Password:
            <input
              type="password"
              name="password"
              id="pass"
              placeholder="Enter Your Password"
              value={data.password}
              autoComplete="off"
              onChange={HandelChange}
            />
          </label>

          <button id="submit" onClick={submit}>
             <p onClick={()=>{
              navigate("/login")
            }}>Submit</p>
          </button>
        </form>
        <hr className="hrl" />
        <p
          onClick={() => {
            navigate("/login");
          }}
          className="shift"
        >
          If you already ragister goto login page
        </p>
      </section>
    </div>
  );
}

export default Register;
