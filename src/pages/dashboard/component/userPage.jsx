import React from "react";
import '../styles/userPage.css'
import { Helmet } from "react-helmet";
import { Hero } from './hero';
import { UserTopnav } from "./userTopnav";

 export const UserPage = () =>{

    return(
        <section className='usermap'>

        <div>
        <Helmet>
        <link rel="icon" type="image/png"  sizes='16x16' href="../../../assets/images/bme icon.PNG" />
        <title>bime.</title>
        <meta name="description" content="My app description" />
      </Helmet>
        </div>
         <div className="usermain">
            <UserTopnav /> 
            <Hero/>
            <div className="useraside1">
            <div className="userbox1"></div>
            <div className="userbox2"></div>
            </div>

            <div className="useraside2">
                <div className="userbox3"></div>
                <div className="userbox4"></div>
            </div>

            <div className="userfoot">
               Team production (c) 2023
            </div>    
        </div>
       </section>
    )
}