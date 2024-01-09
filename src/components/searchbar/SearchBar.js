"use client";

import SearchTextInput from "./SearchTextInput";
import { useState } from "react";
import SearchDateInput from "./searchDateInput";
import SearchGuestInput from "./SearchGuestInput";

const SearchBar = () => {
  const [isSelected, setIsSelected] = useState("");

  return (
    <div
      className={`
            border-[1px]
            w-3/5
            max-w-[850px]
            md:min-w-[700px]
            min-w-[300px]
            h-[65px]
            rounded-full
            shadow-md
            hover:shadow-md
            transition
            cursor-pointer
            ${isSelected ? "md:bg-neutral-200" : "bg-white"}
        `}
    >
      <div
        className="
                h-full
                flex
                flex-row
                items-center
                justify-between
            "
      >
        <SearchTextInput
          disabled={false}
          name="destination"
          label="여행지"
          placeholder="여행지 검색"
          isOpen={isSelected === "destination"}
          setIsOpen={setIsSelected}
        />
        <SearchDateInput
          name="checkIn"
          label="체크인"
          placeholder="날짜 추가"
          isOpen={isSelected === "checkIn"}
          setIsOpen={setIsSelected}
        />
        <SearchDateInput
          name="checkOut"
          label="체크아웃"
          placeholder="날짜 추가"
          isOpen={isSelected === "checkOut"}
          setIsOpen={setIsSelected}
        />
        <SearchGuestInput
          name="guestInfo"
          label="여행자"
          placeholder="게스트 추가"
          isOpen={isSelected === "guestInfo"}
          setIsOpen={setIsSelected}
        />
      </div>
    </div>
  );
};

export default SearchBar;
