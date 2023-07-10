import React ,{ useState}from "react";
import user from '../../../assets/images/user (1).png'
import user1 from '../../../assets/images/user.png'
import bimelogo from '../../../assets/images/bime.svg'
import '../styles/userTopnav.css'
import help from '../../../assets/images/help.svg';
import list from '../../../assets/images/list.svg';
import faq from '../../../assets/images/support.svg'
import logout from '../../../assets/images/logoutpng.png'

export const UserTopnav =()=>{
  const [dropDownOpens, setDropdownOpens] = useState(false);
  const [openInboxss, setOpenInboxs] = useState(false);
  const username = localStorage.getItem('username')

  const handleDropDowns = () => {
    setDropdownOpens(!dropDownOpens);
  };

  const toggleInboxs = () => {
    setOpenInboxs(!openInboxss);
  };

    
  return (
    <nav className="usertopnav">
      <div>
        <img className="userlogo" src={bimelogo} alt="" />
      </div>
      <div className="userfaq">
        <h3>Hi {username} 😊✔</h3>
      </div>

      <div>
        <div className="userdp" onClick={handleDropDowns}>
          <img className="useruser" src={user} alt="" />{" "}
        </div>
        {dropDownOpens && (
          <div className="userdrpdown" onClick={toggleInboxs}>
            <li className="useraccount">
              {" "}
              <img className="userdp2" src={user1} alt="" />
              <p>Profile</p>
            </li>
            <li className="usermylist">
              {" "}
              <img className="userls" src={list} alt="" />
              <p>my list</p>
            </li>
            <li className="faq">
              {" "}
              <img className="userls" src={faq} alt="" />
              <p>About us</p>
            </li>
            <li className="">
              {" "}
              <img className="userhp" src={help} alt="" />
              <p>Help</p>
            </li>
            <li className="userlogout">
              <img className="userlg" src={logout} alt="" />
              <p>Sign out</p>
            </li>
          </div>
        )}
      </div>
    </nav>
  );
 
}