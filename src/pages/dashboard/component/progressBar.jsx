
import ProgressBar from "@ramonak/react-progress-bar";


import React from 'react';

function ProgressBars() {

    const mainDiv = {
        width: "400px",
        height: '200px',
        marginLeft: '5rem',
        marginTop: '1rem'
     
     };

   

  return (
    <div>
      <div style = {mainDiv}>
    
         <ProgressBar completed = {50} bgColor = "grey" animateOnRender = {true} maxCompleted={100}  />
         <br></br>
         <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} maxCompleted={100}  />
         <br></br>
         <ProgressBar completed = {90} bgColor = "red" animateOnRender = {true} maxCompleted={100}  />
         <br></br>
         <ProgressBar completed = {20.1} bgColor = "black" animateOnRender = {true} maxCompleted={100}  />
         <br></br>
         <ProgressBar completed = {100} animateOnRender = {true} maxCompleted={100} />
      </div>
    </div>
  );
}

export default ProgressBars;
