import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import UserLogin from "./components/userlogin";
import UserOtp from "./components/otpscreen";
import Success from "./components/success";
import Searchfield from "./components/search";
import Movie from "./components/movie";
import Show from "./components/show";
import Seat from "./components/seat";
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
          <Route path="movie" element={<Movie />} />
          <Route path="showList" element={<Show />} />
          <Route path="seat" element={<Seat />} />
        </Route>
        <Route path="/search" element={<Searchfield />} />
      </Routes>
    </Router>
  )
}

export default App
