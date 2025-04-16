import Carousal from "./carousal";
import RecommendedMovie from "./recommendedMovie";
import Ad from "./ad";
import UpcomingMovie from "./UpcomingMovie";
import LatestMovie from "./latestmovie";
import Footer from "./footer";
const Home =()=>{
    return(
        <div className="container-fluid p-0">
            <Carousal/>
            <RecommendedMovie/>
            <Ad/>
            <LatestMovie/>
            <UpcomingMovie/>
            <Footer/>
        </div>
    )
}

export default Home;