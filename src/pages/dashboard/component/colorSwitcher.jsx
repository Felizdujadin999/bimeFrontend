import React, { useEffect, useState } from "react";
import '../styles/coloswitch.css'
import  ColorItem  from "./color-item";

const ColorSwitcher =()=>{
    
    const colors = ["#2F4F4F", "#4B0082", "#C71585", "#3CB371", "#32CD32", '#008B8B', '	#8B0000', '#BDB76B','#6b4705']

    const [state, setState] = useState(false);

    useEffect(()=>{
        const currentColor = localStorage.getItem('color');
        setTheme(currentColor)
    },[])

    const setTheme = (color) =>{
        document.documentElement.style.setProperty('--bg-color', color);
    }

    const setColor = (event) =>{
         const currentColor = event.target.style.getPropertyValue('--bg-color');
            setTheme(currentColor)
            localStorage.setItem('color', currentColor);
    }

    return(
        <div className={`color-switcher ${state && 'color-switcher--open'}`}>
        <button onClick={()=> setState(prevState => !prevState)} className="cpb"><div className="ri-settings-3-fill"></div></button>
        <h1 className="heading">personalise</h1>
        <div className="color-list">
           {colors.map((color, idx)=> <ColorItem  key={idx} setColor={setColor} color = {color}/>)} 
        </div>
    </div>
    )

}

export default ColorSwitcher;