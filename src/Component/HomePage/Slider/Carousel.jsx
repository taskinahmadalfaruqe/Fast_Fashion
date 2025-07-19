import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from '../../../Assests/pic1.jpg';
import pic2 from '../../../Assests/pic2.jpg';
import pic3 from '../../../Assests/pic3.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';

export default function SimpleSwiper() {
  return (
    <div className="h-[60vh] w-full">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="h-full w-full"
      >
        <SwiperSlide className="h-full w-full">
          <img className="w-full h-full object-cover" src={pic1} alt="photo" />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <img className="w-full h-full object-cover" src={pic2} alt="photo" />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <img className="w-full h-full object-cover" src={pic3} alt="photo" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};