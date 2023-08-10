import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.css";
import axiso from 'axios';

function LoginData() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navi = useNavigate();

    async function submit(e) {
        e.preventDefault();
        // console.log(email);
        // console.log(password);
    
        try {
          const response = await axiso.post(
            "http://localhost:5000/api/user/login",
            { email, password }
          );
    
          const data = response.data;
          // console.log(data);
    
          localStorage.setItem("token", data.token);
          localStorage.setItem("name", data.name);
        } catch (err) {
          console.log(err);
        }
      }

  return (
    <div className='security'>
        <section id="midparts">
        <h3>Login Page!</h3>
        <form method="POST">
          <label className="inp">
            Email:
            <input
              type="email"
              name='email'
              placeholder="Enter your Email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label className="inp">
            Password:
            <input
              type="password"
              name='password'
              placeholder="Enter password"
              autoComplete="off"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button id="submit" onClick={submit}>
            <p onClick={()=>{
              navi("/")
            }}> Submit</p>
          </button>
        </form>
        <hr className="hrl" />
        <p
          onClick={() => {
            navi("/register");
          }}
          className="shift"
        >
          Goto Ragistration Page
        </p>
      </section>
    </div>
  )
}

export default LoginData