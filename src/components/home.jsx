import Navbar from "./navbar";
import Carousal from "./carousal";
import RecommendedMovie from "./recommendedMovie";

const Home =()=>{
    return(
        <div>
            <Navbar/>
            <Carousal/>
            <RecommendedMovie/>
        </div>
    )
}

export default Home;