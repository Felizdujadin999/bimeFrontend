import React, {useState} from "react";
import user from '../../../assets/images/user (1).png'
import user1 from '../../../assets/images/user.png'
import bimelogo from '../../../assets/images/bime.svg'
import '../styles/topnav.css'
import help from '../../../assets/images/help.svg';
import list from '../../../assets/images/list.svg';
import faq from '../../../assets/images/support.svg'
import logout from '../../../assets/images/logoutpng.png'

export const TopNav = (props) => {
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
        <p> Hi </p>
      </li>

      <li className="signup" id="su" onClick={toSignup}>
        <p>Sign up</p>
      </li>
      <li className="login" id="li" onClick={toLogin}>
        <p>Login</p>
      </li>
      <div>
        <div className="dp" onClick={handleDropDowns}>
          <img className="user" src={user} alt="" />{" "}
        </div>
      </div>
    </nav>
  );
};