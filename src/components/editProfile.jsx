import "../css/editprofile.css";
const EditProfile = () => {
    return (
        <div className="container-fluid edit_profile m-0 py-3">
            <div className="acc_detail">
                <div className="acc_detail1">
                    <img
                        src="user.png"
                        alt="user"
                        className="edit_image position-relative"
                    />
                </div>
                <div className="acc_detail2 p-4">
                <div className="fs-4 fw-bold">Account Details</div>
                <div className="d-flex py-3 gap-5">
                    <div>Email Address</div>
                    <div className="px-5">srushtip579@gamil.com</div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;