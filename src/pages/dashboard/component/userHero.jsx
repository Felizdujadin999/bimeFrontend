import React from "react";
import ReLineChart from "./reLineChart";
import "../styles/userHero.css";

function UserHero() {
  return (
    <div className="userhero">
      <div className="das">
        <h1 className="dbw">Dashboard</h1>
        <p className="dbp">
          Daily Report of your activity <br />
          on bime.
       
        </p>
      </div>
      <ReLineChart />
      
    </div>
  );
}

export default UserHero;
