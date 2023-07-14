import React from "react";
import ReLineChart from "./reLineChart";
import "../styles/userHero.css";

function UserHero() {
  

  const date = new Date()
  var days = [];
  for (var i = 0; i < 7; i++){
      days[i] = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 1 + i).toDateString();
      console.log(days[i]);
  }

const prodp = localStorage.getItem('userdp');

  return (
    <div className="userhero">
      <div className="das">
            <img src={prodp} alt=""  className="dashdp"/>
        <h1 className="dbw">Dashboard</h1>
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
