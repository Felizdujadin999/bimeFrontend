import { useState } from 'react';
import  '../styles/registrationStyle.css'
import axios from 'axios';
import { Navigate } from 'react-router-dom';


export const Registration=()=>{
      const bgColor = localStorage.getItem('color')

      const[username, setUsername] = useState('');
      const[email, setEmail] = useState('');
      const[password, setPassword]= useState('');
      const[errormessage, setErrorMessage] = useState('')

    

     
       
const handleSubmit = async (event)=>{
    event.preventDefault();
console.log('Fields --> ', username, password, email)
    const URL = 'http://localhost:8080/api/bime/auth/register';
    let item = {
        username,
        email,
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
 
    return (
      <div className="regMain" id="reg" style={{ backgroundColor: bgColor }}>
        <form onSubmit={handleSubmit} action="" className="regform">
          <h1 className="regbime" style={{ color: bgColor }}>
            {" "}
            bime.{" "}
          </h1>
          <input
            className="username"
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            className="email"
            type="email"
            placeholder="youremail@...com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className="password"
            type="password"
            maxLength={8}
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            className="button"
            style={{ backgroundColor: bgColor }}
            type="submit"
          >
            sign in
          </button>
          <p className="regredir">
            Already have an account? <a href="/login">login</a>
          </p>
        </form>
      </div>
    );
}