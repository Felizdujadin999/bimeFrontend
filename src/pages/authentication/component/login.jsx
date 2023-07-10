import  '../styles/loginStyle.css';

export const Login=()=>{
    const bgColor = localStorage.getItem('color')
    
    return(
  
        <div className="logMin" style={{backgroundColor:bgColor}}>
            <form action="" className='logform' >
                <h1 className='logbime' style={{color:bgColor}}>bime.</h1>
                <input className='logusername' type="text"  placeholder='username'/>
                <input  className='logpassword'type="password"  maxLength={8} placeholder='********' />
                <button  className='logbutton' type='submit' style={{backgroundColor:bgColor}}>sign in</button>
                <p className='logredir' >Don't have an account? <a href="/signUp">sign up</a></p>
            </form>
        </div>
    );
}