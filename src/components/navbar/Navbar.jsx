import React from "react";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar() {
  const { user,dispatch,load} = useContext(AuthContext);
  const navigate = useNavigate();


  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
   
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BookingApp.com</span>
        </Link>

        {user ? (
          <button className="userName" style={{  textDecoration: "none" }}>{user.username}</button>) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
           
          </div>
        )}
  
  <button className="Logout"  onClick={handleClick}>Logout</button>

      
   
   
      </div>
    </div>
  );
}

export default Navbar;
