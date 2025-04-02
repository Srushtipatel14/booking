import Navbar from "./navbar";
import Carousal from "./carousal";
import RecommendedMovie from "./recommendedMovie";
import Ad from "./ad";
import UpcomingMovie from "./UpcomingMovie";
import Footer from "./footer";
const Home =()=>{
    return(
        <div className="container-fluid p-0">
            <Navbar/>
            <Carousal/>
            <RecommendedMovie/>
            <Ad/>
            <UpcomingMovie/>
            <Footer/>
        </div>
    )
}

export default Home;