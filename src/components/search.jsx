import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Searchfield = () => {
    const navigate = useNavigate();

    return (
        <div className="container-fluid position-relative py-5 search_top">
            <div className="d-flex align-items-center justify-content-between px-3">
                <div style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
                    <FiArrowLeft size={30} />
                </div>
                <form style={{ width: "50%" }}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control search-input"
                            placeholder="Search for Cinemas and Movies"
                            aria-label="Search"
                            style={{
                                outline: "none",
                                boxShadow: "none",
                                borderRadius: "0px",
                                height: "3rem",
                            }}
                        />
                    </div>
                </form>
                <div style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
                    <RxCross2 size={30} />
                </div>
            </div>
        </div>
    );
};

export default Searchfield;
