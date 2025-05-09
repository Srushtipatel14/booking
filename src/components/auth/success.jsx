import "../../css/Userlogin.css";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div className="container-fluid flex-grow-1 d-flex justify-content-center align-items-center bg_image">
      <div className="card p-4 text-center form_styling" style={{ width:"380px" }}>
        <div>
          <img src="success.svg" alt="web_logo" className="mb-3 success_img" style={{ width:"200px"}} />
        </div>
        <div className="mt-2">
          <p className="success_font">Verification Successful</p>
        </div>
        <div className="mt-2">
          <Link className="button-primary"  to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
