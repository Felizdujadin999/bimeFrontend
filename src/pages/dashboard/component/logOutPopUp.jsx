import React from 'react';
import '../styles/logpop.css'

function LogOutPopUp(props) {
  return props.trigger ?(
    <div className="logpopup">
      <div className="logpopup-inner">
        <button className="closelog-btn" onClick={() => {
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

export default LogOutPopUp;
