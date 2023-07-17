import React from 'react';
import '../styles/logpop.css'

function LogOutPopUp(props) {
  return props.trigger ?(
    <div className="logpopup">
      <div className="logpopup-inner">
        <button className="closelog-btn" onClick={() => props.setTrigger(false)}>
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
