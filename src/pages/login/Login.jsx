import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import React from "react";
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });






  const { load, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://booking-app-node.herokuapp.com/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

  
      navigate("/signup")
   
  };


  return (
    <div className="login">
      <div className="loginContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="loginInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="loginInput"
        />
        <button disabled={load} onClick={handleClick} className="loginButton">
          Login
        </button>

        <button disabled={load} onClick={handleSignUp} className="loginButton">
          SignUp
      
        </button>
   


      


     
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;