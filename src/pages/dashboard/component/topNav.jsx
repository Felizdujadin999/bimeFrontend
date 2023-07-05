import React, {useState} from "react";
import user from '../../../assets/images/user (1).png'
import user1 from '../../../assets/images/user.png'
import bimelogo from '../../../assets/images/bime.svg'
import '../styles/topnav.css'
import help from '../../../assets/images/help.svg';
import list from '../../../assets/images/list.svg';
import faq from '../../../assets/images/support.svg'
import logout from '../../../assets/images/logoutpng.png'

export const TopNav = ()=>{
    const [dropDownOpens, setDropdownOpens] = useState(false);
    const [openInboxss, setOpenInboxs] = useState(false);

    const handleDropDowns = () => {
        setDropdownOpens(!dropDownOpens);
    };

    const toggleInboxs = () => {
        setOpenInboxs(!openInboxss);
       
    }

    return(
        <nav className="topnav">
              
        <div >
            <img className='logo' src={bimelogo} alt="" />
        </div>
        <li className='faq'>
            <p>FAQ</p>
        </li>
    
        <li className='signup'>
            <p>Sign up</p>
        </li>
        <li className='login'>
             <p>Login</p>
        </li>
        <li>
            <div className="dp"onClick={handleDropDowns}><img  className= 'user' src={user} alt="" /> </div>
            {dropDownOpens &&(
              <div className="drpdown" onClick={toggleInboxs}>
                <li className="account"> <img  className= 'dp2' src={user1} alt="" /><p>Account</p></li>
                <li className= 'mylist'> <img  className= 'ls' src={list} alt="" /><p>my list</p></li>
                <li className='faq'> <img  className= 'faq' src={faq} alt="" /><p>FAQ</p></li>
                <li className=""> <img  className= 'hp' src={help} alt="" /><p>Help</p></li>
                <li className="logout"><img  className= 'lg' src={logout} alt="" /><p>Sign out</p></li>
              </div>
            )}
        </li>
    </nav>
    )
}