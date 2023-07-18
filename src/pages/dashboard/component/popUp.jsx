import React from "react";
import "../styles/popUp.css";

function PopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() =>{
           props.setTrigger(false)
           document.getElementById('map1').style.filter = 'none'
           document.getElementById('map2').style.filter = 'none'
           document.getElementById('map3').style.filter = 'none'
           }}>
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
