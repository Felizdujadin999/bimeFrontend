import { useState } from 'react';
import  '../styles/registrationStyle.css'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Registration = () => {
  const bgColor = localStorage.getItem("color");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const notifyInfo = (arg) => {
    toast.info(arg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };



  const notifyRedir = (arg) => {
    toast.info(arg, {
      position: "top-center",
      autoClose:5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const notifySuccess = (arg) => {
    toast.success(arg, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyError = (arg) => {
    toast.error(arg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = async (event) => {  
    event.preventDefault();
    // console.log("Fields --> ", username, password, email);
    const URL = "http://localhost:8080/api/bime/auth/register";
    let item = {
      username,
      email,
      password,
    };

    
    if (username !== "" && email !== "" && password !== "") {
      const response = await axios
        .post(URL, item)
        .then((res) => {
          return res.data;
      
        })
        .catch((error) => {
          return error;
        });
     

    

        if (response.name === "AxiosError") {
          notifyError("Register failed try login.");
        } else {
          notifySuccess(response.message);
          localStorage.setItem('username', response.username)
          setTimeout(()=>{
            notifyRedir('we sent a verification link to your email.');
          }, 2000);
        }
    } else {
      notifyInfo("Please fill the form below!");
    }
    
  };

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
          sign up
        </button>
        <ToastContainer />
        <p className="regredir">
          Already have an account? <a href="/login">login</a>
        </p>
      </form>
    </div>
  );
};