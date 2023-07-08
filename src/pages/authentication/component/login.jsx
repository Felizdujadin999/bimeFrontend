import  '../styles/loginStyle.css';
import React,{useState} from 'react';
import axios from 'axios';

export const Login=()=>{
    const bgColor = localStorage.getItem('color');
    const[username, setUsername] = useState('');
    const[password, setPassword]= useState('');



    const handleLogSubmit = async (event)=>{
        event.preventDefault();
    console.log('Fields --> ', username, password)
        const URL = 'http://localhost:8080/api/bime/auth/login';
        let item = {
            username,
            password,
          };
        const  response = await axios.post(URL, item)
        .then((res)=>{
            return res.data
        })
        .catch((error)=>{
            return error
        })
        console.log('res --> ', response)
    }
    
    return(
  
        <div className="logMin" style={{backgroundColor:bgColor}}>
            <form action="" className='logform' >
                <h1 className='logbime' style={{color:bgColor}}>bime.</h1>
                <input className='logusername' type="text"  placeholder='username'    onChange={(e) => setUsername(e.target.value)} value={username}/>
                <input  className='logpassword'type="password"  maxLength={8} placeholder='********'   onChange={(e) => setPassword(e.target.value)}   value={password} />
                <button  className='logbutton' type='submit' style={{backgroundColor:bgColor}} onClick={handleLogSubmit}>sign in</button>
                <p className='logredir' >Don't have an account?<a href="/signUp">sign up</a></p>
            </form>
        </div>
    );
}