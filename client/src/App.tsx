import {
  BrowserRouter as Router,
  Link,
  Route,

} from "react-router-dom";
import { Routes } from "react-router";
import { AuthContext } from "./context/AuthContext";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/loginform";
import Home from "./pages/home";
import Register from "./pages/registerform";
import jwt_decode from "jwt-decode";
function App() {
  const [user, setUser]: any = useState();
  const [project, setProject]: any = useState([]);


  return (
    <div className="App">
  
  <AuthContext.Provider value={{ user, setUser, project, setProject }}>
          <Router>
           
            <Routes>
           
              <Route path="/" element={<Login></Login>} />
              <Route path="/home" element={<Home></Home>} />
              <Route path="/register" element={<Register></Register>} />
          
            </Routes>

          </Router>
        </AuthContext.Provider>





    </div>
  )
}

export default App
