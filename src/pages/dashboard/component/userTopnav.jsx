import React, { useState } from "react";
import user1 from "../../../assets/images/user.png";
import bimelogo from "../../../assets/images/bime.svg";
import "../styles/userTopnav.css";
import help from "../../../assets/images/help.svg";
import list from "../../../assets/images/list.svg";
import faq from "../../../assets/images/support.svg";
import logout from "../../../assets/images/logoutpng.png";
import PopUp from "./popUp";
import UploadAvatar from "./uploadAvatar";
import LogOutPopUp from "./logOutPopUp";
import { useNavigate } from "react-router-dom";

export const UserTopnav = () => {
  const [dropDownOpens, setDropdownOpens] = useState(false);
  const [openInboxss, setOpenInboxs] = useState(false);
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [logBotton, setLogBotton] = useState(false);
  const username = localStorage.getItem("username");
  const userdp = localStorage.getItem("userdp");
  const navigate = useNavigate();

  const handleDropDowns = () => {
    setDropdownOpens(!dropDownOpens);
  };

  const toggleInboxs = () => {
    setOpenInboxs(!openInboxss);
  };

  return (
    <nav className="usertopnav" id="nav">
      <div>
        <img className="userlogo" src={bimelogo} alt="" />
      </div>
      <div className="userfaq">
        <h3>Hi {username} ✔</h3>
      </div>

      <div>
        <div className="userdp" onClick={handleDropDowns}>
          <img className="useruser" src={userdp} alt="" />{" "}
        </div>
        {dropDownOpens && (
          <div className="userdrpdown" onClick={toggleInboxs}>
            <li
              className="useraccount"
              onClick={() => {
                setButtonPopUp(true);
                setLogBotton(false);
                document.getElementById("map1").style.filter = "blur(2px)";
                document.getElementById("map2").style.filter = "blur(2px)";
                document.getElementById("map3").style.filter = "blur(2px)";
              }}
            >
              {" "}
              <img className="userdp2" src={user1} alt="" />
              <p>Edit profile</p>
            </li>

            <li className="usermylist">
              {" "}
              <img className="userls" src={list} alt="" />
              <p>Restricted</p>
            </li>
            <li className="faq">
              {" "}
              <img className="userls" src={faq} alt="" />
              <p>Bime?</p>
            </li>
            <li className="">
              {" "}
              <img className="userhp" src={help} alt="" />
              <p>Help</p>
            </li>
            <li
              className="userlogout"
              onClick={() => {
                setLogBotton(true);
                setButtonPopUp(false);
                document.getElementById("map1").style.filter = "blur(2px)";
                document.getElementById("map2").style.filter = "blur(2px)";
                document.getElementById("map3").style.filter = "blur(2px)";
              }}
            >
              <img className="userlg" src={logout} alt="" />
              <p>Sign out</p>
            </li>
          </div>
        )}
      </div>
      {
        <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
          <p>Edit you profile picture </p>
          <UploadAvatar />
          <br />
          <div className="updateusernamebox">
            Edit your username
            <input
              type="text"
              className="editusernamebox"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder={username}
            />
          </div>
        </PopUp>
      }

      {
        <LogOutPopUp trigger={logBotton} setTrigger={setLogBotton}>
          <h1 className="confirm">Are you sure you want to logout?</h1>
          <button
            className="logno"
            onClick={() => {
              setLogBotton(false);
              document.getElementById('map1').style.filter = 'none'
              document.getElementById('map2').style.filter = 'none'
              document.getElementById('map3').style.filter = 'none'
            }}
          >
            No
          </button>
          <button
            className="logyes"
            onClick={() => {
              navigate("/");
            }}
          >
            Yes
          </button>
        </LogOutPopUp>
      }
    </nav>
  );
};
