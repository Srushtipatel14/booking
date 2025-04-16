import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import UserLogin from "./components/auth/userlogin";
import UserOtp from "./components/auth/otpscreen";
import Success from "./components/auth/success";
import Searchfield from "./components/navbar/search";
import Movie from "./components/movie";
import Show from "./components/show";
import Seat from "./components/seat";
import EditProfile from "./components/navbar/editProfile";
import {RecommendedAll} from "./components/homeScreen/recommendedAll";
import Cinema from "./components/cinema";
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
          <Route path="cinema" element={<Cinema />} />
          <Route path="showList" element={<Show />} />
          <Route path="editprofile" element={<EditProfile/>}/>
          <Route path="recommendedall" element={<RecommendedAll/>}/>
        </Route>
        <Route path="/search" element={<Searchfield />} />
        <Route path="/seat" element={<Seat />} />
      </Routes>
    </Router>
  )
}

export default App
