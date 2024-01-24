"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperButton from "./SwiperButton";
import Image from "next/image";

const ImageSwiper = ({ images }) => {
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
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background-color: #ffffff;
        }
      `}</style>
      <div>
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image fill alt="room photo" src={image} sizes={24} />
          </SwiperSlide>
        ))}
      </div>

      <SwiperButton icon={BiChevronLeft} direction="prev" />
      <SwiperButton icon={BiChevronRight} direction="next" />
    </Swiper>
  );
};

export default ImageSwiper;
