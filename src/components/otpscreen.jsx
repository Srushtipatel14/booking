import "../css/Userlogin.css";
const UserOtp = () => {
    return (
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg_image">
            <div className="card p-4 shadow text-center form_styling" style={{ width: "350px" }}>
                <div>
                    <img src="booking_logo.png" alt="web_logo" className="mb-3" style={{ width: "75px" }} />
                </div>
                <div className="mb-3">
                    <p className="login_font">Please enter verification code</p>
                </div>
                <div className="my-3 d-flex justify-content-center align-items-center">
                    <input type="text" className="form-control mx-1" />
                    <input type="text" className="form-control mx-1" />
                    <input type="text" className="form-control mx-1" />
                    <input type="text" className="form-control mx-1" />
                    <input type="text" className="form-control mx-1" />
                    <input type="text" className="form-control mx-1" />
                </div>
                <div className="mt-3">
                    <button className="button-primary w-100">Verify</button>
                </div>
                <div className="mt-4">
                    <p className="login_font">Resend verification code in 45 seconds</p>
                </div>
            </div>
        </div>
    );
};

export default UserOtp;
