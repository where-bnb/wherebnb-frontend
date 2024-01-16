"use client";

import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { Navigation, Pagination } from "swiper/modules";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

register();

const Swiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      modules: [Navigation, Pagination],
      navigation: true,
      injectStyles: [
        `
      .swiper-button-next,
      .swiper-button-prev {
        background-color: white;
        background-position: center;
        background-size: 40px;
        background-repeat: no-repeat;
        padding: 8px 16px;
        border-radius: 100%;
        border: 2px solid #D4D4D4;
        color: black;
      }

      .swiper-button-prev {
        background-image: ${BiChevronLeft};
      }

      .swiper-button-next {
        background-image: ${BiChevronRight};
      }
    `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container swiperElement ref={swiperRef} init="false">
      <swiper-slide>
        <div className="h-[100px]">slide1</div>
      </swiper-slide>
      <swiper-slide>
        <div className="h-[100px]">slide2</div>
      </swiper-slide>
      <swiper-slide>
        <div className="h-[100px]">slide3</div>
      </swiper-slide>
    </swiper-container>
  );
};

export default Swiper;
