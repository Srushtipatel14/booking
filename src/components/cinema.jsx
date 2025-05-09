import "../css/show.css";
import "../css/cinema.css";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const Cinema = () => {
    const navigate = useNavigate()
    return (
        <div className="container-fluid p-0 show_detail">
            <div className="container-fluid p-0 mt-3 show_inner_detail">
                <div className="d-flex flex-column mt-1 show_detail_title show_detail_title_ext">
                    <div className="mt-1">
                        <p className="show_detail_title_text">Sikandar - (Hindi)</p>
                    </div>
                    <div className="d-flex gap-2">
                        {["Action", "Drama"].map((item, index) => (
                            <div className="show_detail_type" key={index}><span>{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="hrLine"></div>
            </div>
            <div className="cinema_list mt-3" onClick={()=>navigate("/showList")}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 19].map((item, index) => (
                    <div key={index} className="cinema_name">
                        <CiHeart size={20} />
                        <span className="cinema_text">PVR:Palladium Mall,Ahmedabad</span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Cinema;