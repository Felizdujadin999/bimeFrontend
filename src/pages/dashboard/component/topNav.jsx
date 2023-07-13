import React from "react";
import user from '../../../assets/images/user (1).png'
import bimelogo from '../../../assets/images/bime.svg'
import '../styles/topnav.css'


export const TopNav = () => {
 
  const toLogin = () => {
    window.location.href = "/login";
  };

  const toSignup = () => {
    window.location.href = "/signUp";
  };

  return (
    <nav className="topnav">
      <div>
        <img className="logo" src={bimelogo} alt="" />
      </div>
      <li className="faq">
        <p> Hi </p>
      </li>

      <li className="signup" id="su" onClick={toSignup}>
        <p>Sign up</p>
      </li>
      <li className="login" id="li" onClick={toLogin}>
        <p>Login</p>
      </li>
      <div>
        <div className="dp" >
          <img className="user" src={user} alt="" />{" "}
        </div>
      </div>
    </nav>
  );
};