import React from "react";
import ReLineChart from "./reLineChart";
import "../styles/userHero.css";

function UserHero() {
  
  const username = localStorage.getItem("username");
  const date = new Date()
  var days = [];
  for (var i = 0; i < 7; i++){
      days[i] = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 1 + i).toDateString();
      
  }

  const prodp = localStorage.getItem('userdp');

  return (
    <div className="userhero">
      <div className="das">
            <img src={prodp} alt=""  className="dashdp"/>
           
        <h1 className="dbw">{username}</h1>
        <p className="dbp">    
           <span className="dashdate">
              {days[4]}
           </span>
         
       
        </p>
      </div>
      <ReLineChart />
      
    </div>
  );
}

export default UserHero;
