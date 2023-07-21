import "../styles/homePageStyle.css";
import { Helmet } from "react-helmet";
import { Hero } from './hero';
import { TopNav } from './topNav';
import ColorSwitcher from './colorSwitcher';
import video from '../../../assets/video/Add a heading.mp4';
import staticone from '../../../assets/images/static/static1.jpg';


function HomePage (){
   
    return(
       
       <section className='map'>

        <div>
        <Helmet>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../../../assets/images/bme icon.PNG"
          />
          <title>bime.</title>
          <meta name="description" content="My app description" />
        </Helmet>
      </div>
      <div className="homemain">
        <TopNav />
        <Hero />
        <ColorSwitcher />
        <div className="aside1">
          <div className="box1">
            <video
              src={video}
              className="video"
              type="video/mp4"
              controls
              muted
              loop
              autoPlay
            ></video>
          </div>
          <div className="box2">
            <img src={staticone} alt="" className="static_one"/>
          </div>
        </div>

        <div className="aside2">
          <div className="box3">

          </div>
          <div className="box4"></div>
        </div>

        <div className="foot">Team production (c) 2023</div>
      </div>
    </section>
  );
}

export default HomePage;
