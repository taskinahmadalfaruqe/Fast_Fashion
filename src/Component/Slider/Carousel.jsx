import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from '../../Assests/pic1.jpg'
import pic2 from '../../Assests/pic2.jpg'
import pic3 from '../../Assests/pic3.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='w-full h-full'
           src={pic1} 
           alt="photo" />
          </SwiperSlide>
          <SwiperSlide>
          <img className='w-full h-full'
           src={pic2} 
           alt="photo" />
          </SwiperSlide>
          <SwiperSlide>
          <img className='w-full h-full'
           src={pic3} 
           alt="photo" />
          </SwiperSlide>
      </Swiper>
    </>
  );
}
