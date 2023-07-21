import React from "react";
import '../styles/hero.css'
import slidefour from '../../../assets/images/slides/slibe4.jpg'
import slidethree from '../../../assets/images/slides/slibe3.jpg'
import slidetwo from '../../../assets/images/slides/slibe2.jpg'
import slidefive from '../../../assets/images/slides/slibe5.jpg'


export const Hero =()=>{

    return(
        <div className='hero'>
            <div className="slider">
                <img className="imgs" src={slidefive} alt="" />
                <img className="imgs" src={slidefour} alt="" />
                <img className="imgs" src={slidethree} alt="" />
                <img className="imgs" src={slidetwo} alt="" />
            </div>
        </div>
    )
}