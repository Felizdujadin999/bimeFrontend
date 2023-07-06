import React, { useEffect, useState } from "react";
import '../styles/coloswitch.css'
import  ColorItem  from "./color-item";

export const Hero =()=>{

    const colors = ["#160225", "#30021b", "#022325", "#022c06", "#454907", '#490707', '#000000', '#bdb9b9','#6b4705']

    const [state, setState] = useState(false)

    useEffect(()=>{
        const currentColor = localStorage.getItem('color')
        console.log(currentColor);
        setTheme(currentColor)
    },[])

    const setTheme = (color) =>{
        document.documentElement.style.setProperty('--bg-color', color)
    }

    const setColor = (event) =>{
         const currentColor = event.target.style.getPropertyValue('--bg-color');
            setTheme(currentColor)
            localStorage.setItem('color', currentColor);
    }

  

    return(
        <div className='hero'>
             <div className={`color-switcher ${state && 'color-switcher--open'}`}>
                    <button onClick={()=> setState(prevState => !prevState)} className="cpb"><div className="ri-settings-3-fill"></div></button>
                    <h1 className="heading">personalise</h1>
                    <div className="color-list">
                       {colors.map((color, idx)=> <ColorItem  key={idx} setColor={setColor} color = {color}/>)} 
                    </div>
                </div>
        </div>
        
    )
}