import React from 'react'
import './MailList.css';

function MailList() {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save money save time!</h1>
        <span className="mailDesc">Sign Up ! We'll send best deals to you</span>
   <div className="mailInputContainer">
    <input type="text"
    placeholder='Your Email'/>
    <button>Subscribe</button>
    </div> </div>
  ) 
}

export default MailList