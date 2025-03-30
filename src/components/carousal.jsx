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
          pauseOnMouseEnter: true, // IMPORTANT -> Stop on hover
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
      >
        <SwiperSlide>
          <div className="carousel-slide">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide">Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
