import '../styles/homePageStyle.css'
import { Helmet } from "react-helmet";
import user from '../../../assets/images/user (1).png'
import bimelogo from '../../../assets/images/bime.svg'

function HomePage (){
    return(
       
       <section className='map'>

        <div>
        <Helmet>
        <link rel="icon" type="image/png"  sizes='16x16' href="../../../assets/images/bme icon.PNG" />
        <title>bime.</title>
        <meta name="description" content="My app description" />
      </Helmet>
        </div>
         <div className="homemain">
            <nav className="topnav">
              
                <li >
                    <img className='logo' src={bimelogo} alt="" />
                </li>
                <li className='faq'>
                    <p>FAQ</p>
                </li>
                <li className='contact us'>
                    <p>support</p>
                </li>
                <li className= 'mylist'>
                    <p>my list</p>
                </li>
                <li className='signup'>
                    <p>Sign up</p>
                </li>
                <li className='login'>
                     <p>Login</p>
                </li>
                <li className=''>
                     <img  className= 'user' src={user} alt="" />
                </li>
            </nav> 


            <div className='hero'></div>

            <div className="aside">
                <div className="box1"></div>
                <div className="box2"></div>
            </div>

            <footer >
                <div className='footer'>

                </div>
            </footer>     
        </div>
       </section>
    );
}

export default HomePage;