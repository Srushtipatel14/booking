import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import UserLogin from "./components/userlogin";
import UserOtp from "./components/otpscreen";
import Success from "./components/success";
import "./App.css";

import Routepage from "./components/route";
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Routepage />}>
          <Route index element={<Home />} />
          <Route path="userlogin" element={<UserLogin />} />
          <Route path="userotp" element={<UserOtp />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
