"use client";

import CategoryBox from "./CategoryBox";
import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories } from "./categoryList";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperButton from "../swiper/SwiperButton";

const Categories = () => {
  const params = useSearchParams();

  return (
    <>
      <Swiper
        className="relative group"
        slidesPerView={4}
        slidesPerGroup={4}
        spaceBetween={0}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        breakpoints={{
          768: { slidesPerView: 7, slidesPerGroup: 7 },
          1024: { slidesPerView: 9, slidesPerGroup: 9 },
          1280: { slidesPerView: 13, slidesPerGroup: 13 },
        }}
        loop={true}
        loopAddBlankSlides={false}
      >
        <div className="flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((item) => (
            <>
              <SwiperSlide>
                <CategoryBox
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  selected={params?.get("category") === item.name}
                  icon={item.icon}
                />
              </SwiperSlide>
            </>
          ))}
        </div>
        <SwiperButton icon={BiChevronLeft} direction="prev" />
        <SwiperButton icon={BiChevronRight} direction="next" />
      </Swiper>
    </>
  );
};

export default Categories;
