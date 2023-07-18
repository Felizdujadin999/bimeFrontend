import React from "react";
import ReLineChart from "./reLineChart";
import "../styles/userHero.css";

function UserHero() {
  const username = localStorage.getItem("username");
  const date = new Date();
  const dateOptions = {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const prodp = localStorage.getItem("userdp");

  return (
    <div className="userhero" id='map1'>
      <div className="das">
        <img src={prodp} alt="" className="dashdp" />

        <h1 className="dbw">{username}</h1>
        <p className="dbp">
          <span className="dashdate">
            {date.toLocaleDateString("en-US", dateOptions)}
          </span>
        </p>
      </div >
      <ReLineChart />
    </div>
  );
}

export default UserHero;
