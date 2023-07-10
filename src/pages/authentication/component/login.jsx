import  '../styles/loginStyle.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify/dist/components';
import { ToastContainer } from 'react-toastify/dist/components';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const bgColor = localStorage.getItem("color");
  const [username, setUsername] = useState("");
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

  const notifySuccess = (arg) => {
    toast.success(arg + username, {
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

  const handleLogSubmit = async (event) => {
    event.preventDefault();
    // console.log("Fields --> ", username, password);
    const URL = "http://localhost:8080/api/bime/auth/login";
    let item = {
      username,
      password,
    };

    if (username !== "" && password !== "") {
      const response = await axios
        .post(URL, item)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          return error;
        });

    //   console.log("res --> ", response);

      if (response.name === "AxiosError") {
    notifyError("Wrong details.");
      } else {
        notifySuccess("Welcome ");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    } else {
      notifyInfo("Please fill the form below!");
    }
  };

  return (
    <div className="logMin" style={{ backgroundColor: bgColor }}>
      <form action="" className="logform">
        <h1 className="logbime" style={{ color: bgColor }}>
          bime.
        </h1>
        <input
          className="logusername"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          className="logpassword"
          type="password"
          maxLength={8}
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          className="logbutton"
          type="submit"
          style={{ backgroundColor: bgColor }}
          onClick={handleLogSubmit}
        >
          sign in
        </button>
        <ToastContainer />
        <p className="logredir">
          Don't have an account?<a href="/signUp">sign up</a>
        </p>
      </form>
    </div>
  );
};
