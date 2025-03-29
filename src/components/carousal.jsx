// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Carousal = () => {
//     return (
//         <Carousel>
//             <Carousel.Item>
//                 <img className="d-block w-100 " src="movie.jpg" alt="First slide" />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img className="d-block w-100" src="theater.jpg" alt="Second slide" />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img className="d-block w-100" src="cinema.jpg" alt="Third slide" />
//             </Carousel.Item>
//         </Carousel>
//     );
// };

// export default Carousal;
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousal = () => {
    return (
        <div style={{ height: "50vh", overflow: "hidden" }}>
            <Carousel fade indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="movie.jpg"
                        alt="First slide"
                        style={{
                            height: "50vh",
                            objectFit: "cover",
                            objectPosition: "center 20%"
                        }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="theater.jpg"
                        alt="Second slide"
                        style={{
                            height: "50vh",
                            objectFit: "cover",
                            objectPosition: "center 60%"
                        }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="cinema.jpg"
                        alt="Third slide"
                        style={{
                            height: "50vh",
                            objectFit: "cover",
                            objectPosition: "center 40%"
                        }}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carousal;
