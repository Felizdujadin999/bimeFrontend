import React from "react";
import '../styles/coloswitch.css'
export const Hero =()=>{



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