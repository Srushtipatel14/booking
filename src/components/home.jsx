import Navbar from "./navbar";
import Carousal from "./carousal";
import RecommendedMovie from "./recommendedMovie";

const Home =()=>{
    return(
        <div className="container-fluid p-0">
            <Navbar/>
            <Carousal/>
            <RecommendedMovie/>
        </div>
    )
}

export default Home;