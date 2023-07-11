import HomePage from "./pages/dashboard/component/homePage";
import { Registration } from "./pages/authentication/component/registration";
import { Login } from "./pages/authentication/component/login";
import { UserPage } from "./pages/dashboard/component/userPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signUp" element={<Registration/>} />
          <Route path = "/login" element={<Login/>} />
          <Route path = "/dashboard" element={<UserPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
