import React, {useState} from "react";
import user from '../../../assets/images/user (1).png'
import user1 from '../../../assets/images/user.png'
import bimelogo from '../../../assets/images/bime.svg'
import '../styles/topnav.css'
import help from '../../../assets/images/help.svg';
import list from '../../../assets/images/list.svg';
import faq from '../../../assets/images/support.svg'
import logout from '../../../assets/images/logoutpng.png'

export const TopNav = () => {
  const [dropDownOpens, setDropdownOpens] = useState(false);
  const [openInboxss, setOpenInboxs] = useState(false);

  const handleDropDowns = () => {
    setDropdownOpens(!dropDownOpens);
  };

  const toggleInboxs = () => {
    setOpenInboxs(!openInboxss);
  };

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
        <p>FAQ</p>
      </li>

      <li className="signup" onClick={toSignup}>
        <p>Sign up</p>
      </li>
      <li className="login" onClick={toLogin}>
        <p>Login</p>
      </li>
      <div>
        <div className="dp" onClick={handleDropDowns}>
          <img className="user" src={user} alt="" />{" "}
        </div>
        {dropDownOpens && (
          <div className="drpdown" onClick={toggleInboxs}>
            <li className="account">
              {" "}
              <img className="dp2" src={user1} alt="" />
              <p>Profile</p>
            </li>
            <li className="mylist">
              {" "}
              <img className="ls" src={list} alt="" />
              <p>my list</p>
            </li>
            <li className="faq">
              {" "}
              <img className="faqs" src={faq} alt="" />
              <p>About us</p>
            </li>
            <li className="">
              {" "}
              <img className="hp" src={help} alt="" />
              <p>Help</p>
            </li>
            <li className="logout">
              <img className="lg" src={logout} alt="" />
              <p>Sign out</p>
            </li>
          </div>
        )}
      </div>
    </nav>
  );
};