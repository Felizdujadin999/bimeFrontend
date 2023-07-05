import React, {useState} from "react";
import user from '../../../assets/images/user (1).png'
import bimelogo from '../../../assets/images/bime.svg'

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
              
        <li >
            <img className='logo' src={bimelogo} alt="" />
        </li>
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
                <li className="account"><p>Account</p></li>
                <li className= 'mylist'><p>my list</p></li>
                <li className='contact us'><p>support</p></li>
                <li className='faq'><p>FAQ</p></li>
                <li className=""><p>Help</p></li>
                <li className="logout"><p>Sign out of bime  </p></li>
              </div>
            )}
        </li>
    </nav>
    )
}