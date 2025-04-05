import "../css/show.css";
import { useNavigate } from "react-router-dom";

const Show = () => {
    const navigate=useNavigate()
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
                    <hr />
                    <div className="show_detail_sec2 pb-2 w-100">
                        <div className="d-flex overflow-x-auto w-50">
                            {[1, 2, 3, 4, 5, 6,7,8,9].map((item, index) => (
                                <div key={index} className="show_detail_date px-4 py-2">{item}</div>
                            ))}
                        </div>
                        {/* <div className="d-flex  d-none d-md-block">
                            <div className="show_detail_ext">Hindi-2D</div>
                            <div className="show_detail_ext">Price Range</div>
                        </div> */}
                    </div>

                </div>
            </div>

            <div className="p-0 mt-3 show_detail_title show_data">
                <div className="d-flex flex-column">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                        <div key={index} className="show_movie_name">
                            <div className="d-flex m-2">
                                <div className="show_movie_name_left"><p className="fs-6">Sikandar</p></div>
                                <div className="show_movie_name_right">
                                    {["1:00 PM", "1:00 PM", "1:00 PM", "1:00 PM", "1:00 PM", "1:00 PM", "1:00 PM"].map((item, index) => (
                                        <div className="show_movie_time" onClick={()=>navigate("seat")} key={index}>{item}</div>
                                    ))}
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Show;