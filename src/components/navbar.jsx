import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="container-fluid p-0 bg-light">
      <div className="navbar-wrapper mx-auto">
        <nav className="navbar navbar-light  px-4 py-2 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-1">
              <img
                src="booking_logo.png"
                alt="web_logo"
                style={{ width: "45px", height: "45px" }}
              />
              <p
                className="m-0 fs-4 d-none d-sm-block"
                style={{ lineHeight: "1", position: "relative", top: "-3px" }}
              >
                Bookzy
              </p>
            </div>

            <form className="form-inline d-none d-md-block">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <IoSearch size={18} />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search for Cinemas and Movies"
                  aria-label="Search"
                  style={{ width: "250px",minWidth:"300px" }}
                />
              </div>
            </form>
          </div>
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-1">
              <p className="m-0">Ahmedabad</p>
              <IoIosArrowDown size={18} />
            </div>
            <div className="d-flex align-items-center gap-2">
              <img
                src="user.png"
                alt="user"
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                }}
              />
              <p className="m-0 d-none d-sm-block">Hi, Guest</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
