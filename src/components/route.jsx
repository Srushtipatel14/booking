import Navbar from "./navbar/navbar";
import { Outlet } from "react-router-dom";

const Routepage = () => {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <Navbar />
            <div className="flex-grow-1 d-flex">
                <Outlet />
            </div>
        </div>
    );
};

export default Routepage;
