import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(
        "https://booking-app-node.herokuapp.com/api/auth/register",
        {
          username,
          email,
          password,
          country,
          city,
          phone,
        }
      );
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="Register">
      <span className="RegisterTitle">SignUp</span>

      <form className="RegisterForm"  onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          className="RegisterInput"
          type="text"
          placeholder="enter your username"
          onChange={(e) => setUsername(e.target.value)}
          required="true"
        />

        <label>Email</label>
        <input
          className="RegisterInput"
          type="text"
          placeholder="enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          required="true"
        />

        <label>Password</label>
        <input
          type="password"
          className="RegisterInput"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required="true"
        />

        <label>country</label>
        <input
          type="text"
          className="RegisterInput"
          placeholder="enter your country"
          onChange={(e) => setCountry(e.target.value)}
          required="true"
        />

        <label>city</label>
        <input
          type="text"
          className="RegisterInput"
          placeholder="enter your city"
          onChange={(e) => setCity(e.target.value)}
          required="true"
        />

        <label>phone</label>
        <input
          type="Number"
          className="RegisterInput"
          placeholder="enter your PhoneNumber"
          onChange={(e) => setPhone(e.target.value)}
          required="true"
        />

        <button  onClick="handleSubmit" className="RegisterButton" type="submit">

          Signup
        </button>
      </form>
      <button className="RegisterLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
       Please enter different credentials
        </span>
      )}
    </div>
  );
}

export default SignUp;
