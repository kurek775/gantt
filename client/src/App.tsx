import {
  BrowserRouter as Router,
  Link,
  Route,

} from "react-router-dom";
import { Routes } from "react-router";
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/loginform";
import Home from "./pages/home";

function App() {
  const [user, setUser]: any = useState();
  async function handleLogout() {

    localStorage.removeItem('token');
    setUser(null);


}
  return (
    <div className="App">
  
  <AuthContext.Provider value={{ user, setUser }}>
          <Router>
           
            <Routes>
           
              <Route path="/" element={<Login></Login>} />
              <Route path="/home" element={<Home></Home>} />
          
            </Routes>

          </Router>
        </AuthContext.Provider>





    </div>
  )
}

export default App
