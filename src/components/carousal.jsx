import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import '../css/carousel.css';

const Carousel = () => {
  return (
    <div className="carousel-container py-3">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
      >
        {/* <SwiperSlide>
          <div className="carousel-slide carousel-slide1">
            <div className='left_carousel1 d-sm-block p-sm-3 w-100'>
              <div className="d-flex align-items-center gap-1 mb-4 d-none d-md-flex">
                <img
                  src="booking_logo.png"
                  alt="web_logo"
                  style={{ width: "45px", height: "45px" }}
                />
                <p
                  className="m-0 fs-4 "
                  style={{ lineHeight: "1", position: "relative", top: "-3px",color:"#FFFFFF" }}
                >
                  Bookzy
                </p>
              </div>
              <div className='display-5'>
                <p className='left_carousel1_text'>GET READY FOR MOVIE DATE WITH <span style={{color:"#d78519"}}>YOUR LOVED ONCE</span></p>
              </div>
              <div>
                <button className='left_carousel1_btn'>Book Tickets</button>
              </div>
            </div>
            <div className='right_carousel1 d-none d-md-block'>
                <img src="ticket.png" alt="ticket_image" style={{height:"350px",maxWidth:"330px",width:"300px"}}/>  
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="carousel-slide carousel-slide2">
          <div className='left_carousel2 d-sm-block p-sm-3 w-100'>
            </div>
            <div className='right_carousel2 d-none d-md-block'>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="carousel-slide carousel-slide3">
            
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Carousel;
