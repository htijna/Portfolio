import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './carstyle.css'

import arrowLeft from "./img/arrow-left.svg";
import arrowRight from "./img/arrow-right.svg";

function Carousel({ slides = [] }) {
  // Add basic validation for the slides array
  if (!Array.isArray(slides) || slides.length === 0) {
    return <div>No slides available.</div>; // Fallback UI if no slides are provided
  }

  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
      }}
      pagination={{
        clickable: true,
      }}
      speed={1000}
      slidesPerView={"auto"}
      centeredSlides
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="slide-inner">
          <img
            src={slide}
            alt={`slide-${index}`}
            onError={(e) => {
              console.error(`Image at index ${index} failed to load`);
              e.target.style.display = 'none'; // Hide the broken image
            }}
          />
        </SwiperSlide>
      ))}
      <div className="button-prev">
        <img src={arrowLeft} alt="Left" />
      </div>
      <div className="button-next">
        <img src={arrowRight} alt="Right" />
      </div>
    </Swiper>
  );
}

export default Carousel;
