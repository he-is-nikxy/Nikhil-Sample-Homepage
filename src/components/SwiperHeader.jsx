import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
// import 'swiper/css';
import "../css components/swiperHeader.css"


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperHeader = () => {
  return (
    <Swiper
    //   slidesPerView={1}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    // spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
      id='SwiperHeader'
    >
      <SwiperSlide id='slide1'>
        <div>
            <h2 className='slideH'>Lorem ipsum</h2>
            <p className='slideP'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque id facilis impedit excepturi? Velit a ab doloremque eum. Iure ratione in ipsa. A labore corporis praesentium saepe. Pariatur, delectus laudantium.</p>
            <button className='slideBtn'>Know More <i class="ri-arrow-right-s-fill"></i></button>
        </div>
      </SwiperSlide>
      <SwiperSlide id='slide2'>
        <div>
            <h2 className='slideH'>Lorem ipsum</h2>
            <p className='slideP'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque id facilis impedit excepturi? Velit a ab doloremque eum. Iure ratione in ipsa. A labore corporis praesentium saepe. Pariatur, delectus laudantium.</p>
            <button className='slideBtn'>Know More <i class="ri-arrow-right-s-fill"></i></button>
        </div>
      </SwiperSlide>
      <SwiperSlide id='slide3'>
        <div>
            <h2 className='slideH'>Lorem ipsum</h2>
            <p className='slideP'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque id facilis impedit excepturi? Velit a ab doloremque eum. Iure ratione in ipsa. A labore corporis praesentium saepe. Pariatur, delectus laudantium.</p>
            <button className='slideBtn'>Know More <i class="ri-arrow-right-s-fill"></i></button>
        </div>
      </SwiperSlide>
      <SwiperSlide id='slide4'>
        <div>
            <h2 className='slideH'>Lorem ipsum</h2>
            <p className='slideP'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque id facilis impedit excepturi? Velit a ab doloremque eum. Iure ratione in ipsa. A labore corporis praesentium saepe. Pariatur, delectus laudantium.</p>
            <button className='slideBtn'>Know More <i class="ri-arrow-right-s-fill"></i></button>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperHeader