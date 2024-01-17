"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ImageSwiper.css";
import SwiperButton from "./SwiperButton";
import Image from "next/image";

const ImageSwiper = () => {
  return (
    <Swiper
      modules={[Pagination]}
      className="w-full h-full"
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      loopAddBlankSlides={false}
      pagination={{
        type: "bullets",
      }}
      navigation={{
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide",
      }}
    >
      <div>
        <SwiperSlide>
          <Image fill alt="1" src="/images/placeholder.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image fill alt="2" src="/images/logo.png" />
        </SwiperSlide>
      </div>

      <SwiperButton icon={BiChevronLeft} direction="prev" />
      <SwiperButton icon={BiChevronRight} direction="next" />
    </Swiper>
  );
};

export default ImageSwiper;
