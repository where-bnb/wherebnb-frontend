"use client";

import { useGuestFilter } from "@/hooks/useSearchFilter";
import { useCallback, useEffect, useState } from "react";
import { BiSearch, BiMinus, BiPlus } from "react-icons/bi";

const SearchGuestInput = ({ name, label, isOpen, setIsOpen, handleClick }) => {
  const [placeholder, setPlaceholder] = useState("");
  const guestStore = useGuestFilter((state) => state.guests);
  let { adults, children, infants, pets } = guestStore;
  const {
    increaseAdults,
    decreaseAdults,
    increaseChildren,
    decreaseChildren,
    increaseInfants,
    decreaseInfants,
    increasePets,
    decreasePets,
    resetAll,
  } = useGuestFilter();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => {
      if (value === name) return "";
      return name;
    });
  }, []);

  useEffect(() => {
    if (adults && children && infants && pets) {
      setPlaceholder(
        `게스트 ${adults}명, 어린이 ${children}명, 유아 ${infants}명, 반려동물 ${pets}`
      );
    } else if (adults && children && infants) {
      setPlaceholder(
        `게스트 ${adults}명, 어린이 ${children}명, 유아 ${infants}명`
      );
    } else if (adults && children && pets) {
      setPlaceholder(
        `게스트 ${adults}명, 어린이 ${children}명, 반려동물 ${pets}`
      );
    } else if (adults && infants && pets) {
      setPlaceholder(`게스트 ${adults}명, 유아 ${infants}명, 반려동물 ${pets}`);
    } else if (adults && children) {
      setPlaceholder(`게스트 ${adults}명, 어린이 ${children}명`);
    } else if (adults && infants) {
      setPlaceholder(`게스트 ${adults}명, 유아 ${infants}명`);
    } else if (adults && pets) {
      setPlaceholder(`게스트 ${adults}명, 반려동물 ${pets}`);
    } else {
      setPlaceholder(`게스트 ${adults}명`);
    }
  }, [adults, children, infants, pets]);

  return (
    <>
      <div
        onClick={toggleOpen}
        className={`
                pr-3
                h-full
                flex
                flex-row
                md:justify-between
                justify-center
                items-center
                gap-3
                md:grow
                rounded-full
                ${!isOpen ? "md:hover:bg-neutral-200" : ""}
                ${isOpen ? "md:bg-white" : ""}
                ${isOpen ? "md:shadow-md" : ""}
            `}
      >
        <div
          className="
                pl-3
                hidden 
                md:block
                h-full
                text-sm
                font-semibold
            "
        >
          <div
            className="
              h-full
              p-3
              flex
              flex-col
            "
          >
            <div
              className="
                text-xs
                font-bold
              "
            >
              {label}
            </div>
            <div
              className="
                h-full
                text-sm
                text-neutral-500
                font-normal
                bg-white
                bg-opacity-0
                border-none
                focus:outline-none
                overflow-hidden
              "
            >
              {!guestStore.adults &&
              !guestStore.children &&
              !guestStore.infants &&
              !guestStore.pets
                ? "게스트 추가"
                : placeholder}
            </div>
          </div>
        </div>
        {/* 검색 버튼 */}
        <button
          onClick={handleClick}
          className="
                    flex flex-row
                    w-fit
                    justify-between
                    items-center
                    gap-1
                    p-3
                    bg-primary
                    rounded-full
                    text-white
                "
        >
          <BiSearch size={18} />
          <div className="text-md text-nowrap">검색</div>
        </button>
      </div>
      {isOpen && (
        <div
          className="
        absolute
        top-[120%]
        right-0
        z-10
        bg-white
        shadow-lg
        rounded-[40px]
        w-[405px]
        py-2
        px-8
      "
        >
          {/* Section - Adults */}
          <div className="flex flex-row justify-between py-6 border-b-[1px] border-neutral-200">
            <div className="flex flex-col gap-1">
              <div className="font-normal">성인</div>
              <div className="text-sm text-neutral-500 font-light">
                13세 이상
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-3">
              <button
                onClick={decreaseAdults}
                disabled={guestStore.adults === 0}
                className="flex items-center p-2 border-[1px] border-neutral-300 hover:border-black disabled:border-neutral-200 disabled:text-neutral-200 rounded-full"
              >
                <BiMinus size={13} />
              </button>
              <div>{guestStore.adults}</div>
              <button
                onClick={increaseAdults}
                className="flex items-center p-2 border-[1px] border-neutral-300 hover:border-black rounded-full"
              >
                <BiPlus size={13} />
              </button>
            </div>
          </div>
          {/* Section - Children */}
          <div className="flex flex-row justify-between py-6 border-b-[1px] border-neutral-200">
            <div className="flex flex-col gap-1">
              <div className="font-normal">어린이</div>
              <div className="text-sm text-neutral-500 font-light">2~12세</div>
            </div>
            <div className="flex flex-row justify-between items-center gap-3">
              <button
                onClick={decreaseChildren}
                disabled={guestStore.children === 0}
                className="flex items-center p-2 border-[1px] border-neutral-300 hover:border-black disabled:border-neutral-200 disabled:text-neutral-200 rounded-full"
              >
                <BiMinus size={13} />
              </button>
              <div>{guestStore.children}</div>
              <button
                onClick={increaseChildren}
                className="flex items-center p-2 border-[1px] border-neutral-300 hover:border-black rounded-full"
              >
                <BiPlus size={13} />
              </button>
            </div>
          </div>
          {/* Section - Infants */}
          <div className="flex flex-row justify-between py-6 border-b-[1px] border-neutral-200">
            <div className="flex flex-col gap-1">
              <div className="font-normal">유아</div>
              <div className="text-sm text-neutral-500 font-light">
                2세 미만
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-3">
              <button
                onClick={decreaseInfants}
                disabled={guestStore.infants === 0}
                className="flex items-center p-2 border-[1px] border-neutral-300 hover:border-black disabled:border-neutral-200 disabled:text-neutral-200 rounded-full"
              >
                <BiMinus size={13} />
              </button>
              <div>{guestStore.infants}</div>
              <button
                onClick={increaseInfants}
                className="flex items-center p-2 border-[1px] border-neutral-300 hover:border-black rounded-full"
              >
                <BiPlus size={13} />
              </button>
            </div>
          </div>
          {/* Section - Pets */}
          <div className="flex flex-row justify-between py-6">
            <div className="flex flex-col gap-1">
              <div className="font-normal">반려동물</div>
              <div className="text-sm text-neutral-500 font-light">
                보조동물을 동반하시나요?
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-3">
              <button
                onClick={decreasePets}
                disabled={guestStore.pets === 0}
                className="flex items-center p-2 border-[1px] border-neutral-300 hover:border-black disabled:border-neutral-200 disabled:text-neutral-200 rounded-full"
              >
                <BiMinus size={13} />
              </button>
              <div>{guestStore.pets}</div>
              <button
                onClick={increasePets}
                className="flex items-center p-2 border-[1px] border-neutral-300 hover:border-black rounded-full"
              >
                <BiPlus size={13} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchGuestInput;
