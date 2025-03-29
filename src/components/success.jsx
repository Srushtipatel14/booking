import "../css/Userlogin.css"
const Success = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg_image">
      <div className="card p-4 shadow text-center success_div" style={{ width: "350px",backgroundColor:"#040404"}}>
        <div>
          <img src="success.svg" alt="web_logo" className="mb-3 success_img" style={{ width: "300px"}} />
        </div>
        <div className="my-3">
          <p className="success_font">Verification Successful</p>
        </div>
       
      </div>
    </div>
  );
};

export default Success;
