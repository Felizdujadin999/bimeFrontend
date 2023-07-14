
import ProgressBar from "@ramonak/react-progress-bar";


import React from 'react';

function ProgressBars() {

    const mainDiv = {
        width: "400px",
        height: '300px'
     
     };

   

  return (
    <div>
      <div style = {mainDiv}>

         <ProgressBar completed = {50} bgColor = "grey" animateOnRender = {true} />
         <br></br>
         <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true}  />
         <br></br>
         <ProgressBar completed = {90} bgColor = "red" animateOnRender = {true}  />
         <br></br>
         <ProgressBar completed = {20.1} bgColor = "black" />
         <br></br>
         <ProgressBar completed = {100} animateOnRender = {true} maxCompleted={100}  />
      </div>
    </div>
  );
}

export default ProgressBars;
