"use client";

import { useSwiper } from "swiper/react";

const SwiperButton = ({ icon: Icon, direction }) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (direction === "prev") {
      swiper.slidePrev();
    }
    if (direction === "next") {
      swiper.slideNext();
    }
  };
  return (
    <div
      className={`
        top-[25%]
        absolute
        z-10
        button-${direction}-slide
        flex
        flex-row
        justify-center
        items-center
        w-[30px]
        h-[30px] 
        border-[1.5px]
        border-neutral-300
        px-2
        py-2
        rounded-full
        space-x-4
        duration-500
        ${direction === "prev" ? "group-hover:left-0" : "group-hover:right-0"}
        ${direction === "prev" ? "-left-[23rem]" : "-right-[23rem]"}
    
        `}
    >
      <button onClick={handleClick}>
        <Icon size={20} />
      </button>
    </div>
  );
};

export default SwiperButton;
