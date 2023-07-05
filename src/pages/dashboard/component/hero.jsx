import React from "react";
import '../styles/coloswitch.css'
import  ColorItem  from "./color-item";

export const Hero =()=>{

    const colors = ["#00FF00", "#DC143C", "#FFFF00", "#00FFFF", "	#000000", '	#FF4500']


    const setTheme = () =>{
        
    }

    const setColor = (event) =>{
         const currentColor = event.target.style.getPropertyValue('--bg-color');
         console.log(currentColor);
    }


    return(
        <div className='hero'>
             <div className="color-switcher">
                    <button className="cpb"><i class="ri-settings-3-fill"></i></button>
                    <hi className="heading">select color</hi>
                    <div className="color-list">
                       {colors.map((color, idx)=> <ColorItem setColor={setColor} color = {color}/>)} 
                    </div>
                </div>
        </div>
    )
}