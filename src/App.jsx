import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import UserOtp from "./components/otpscreen";
import UserLogin from "./components/userlogin";
import Success from "./components/success";
function App() {

 
  return (
  <Router>
    <Routes>
    <Route path="" element={<Home/>}></Route>
      <Route path="userlogin" element={<UserLogin/>}></Route>
      <Route path="userotp" element={<UserOtp/>}></Route>
      <Route path="success" element={<Success/>}></Route>
    </Routes>
  </Router>
  )
}

export default App
