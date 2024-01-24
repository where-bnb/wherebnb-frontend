"use client";

import { useState, useEffect, useCallback } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const GuestInput = ({ name, label, isOpen, setIsOpen, guest, setGuest }) => {
  const { adults, children, infants, pets } = guest;
  const [placeholder, setPlaceholder] = useState("");
  // TODO: queryString으로 부터 초기값 가져오기

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => {
      if (value === name) return "";
      return name;
    });
  }, []);

  const updateGuestCount = (type, delta) => {
    setGuest((prevGuest) => ({
      ...prevGuest,
      [type]: Math.max(0, prevGuest[type] + delta),
    }));
  };

  useEffect(() => {
    if (adults && children && infants && pets) {
      setPlaceholder(
        `게스트 ${adults}명, 어린이 ${children}명, 유아 ${infants}명, 반려동물 ${pets}`,
      );
    } else if (adults && children && infants) {
      setPlaceholder(
        `게스트 ${adults}명, 어린이 ${children}명, 유아 ${infants}명`,
      );
    } else if (adults && children && pets) {
      setPlaceholder(
        `게스트 ${adults}명, 어린이 ${children}명, 반려동물 ${pets}`,
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
      <div onClick={toggleOpen} className="w-full">
        <div
          className="
                pl-1
                text-sm
                font-semibold
            "
        >
          <div
            className="
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
              {placeholder}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute
        top-[58%]
        right-0
        z-10
        bg-white
        shadow-lg
        rounded-[40px]
        w-[405px]
        py-2
        px-8"
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
                onClick={() => updateGuestCount("adults", -1)}
                disabled={adults === 0}
                className="flex items-center p-2 border-[1px] border-neutral-300 hover:border-black disabled:border-neutral-200 disabled:text-neutral-200 rounded-full"
              >
                <BiMinus size={13} />
              </button>
              <div>{adults}</div>
              <button
                onClick={() => updateGuestCount("adults", 1)}
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
                onClick={() => updateGuestCount("children", -1)}
                disabled={children === 0}
                className="flex items-center p-2 border-[1px] border-neutral-300 hover:border-black disabled:border-neutral-200 disabled:text-neutral-200 rounded-full"
              >
                <BiMinus size={13} />
              </button>
              <div>{children}</div>
              <button
                onClick={() => updateGuestCount("children", 1)}
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
                onClick={() => updateGuestCount("infants", -1)}
                disabled={infants === 0}
                className="flex items-center p-2 border-[1px] border-neutral-300 hover:border-black disabled:border-neutral-200 disabled:text-neutral-200 rounded-full"
              >
                <BiMinus size={13} />
              </button>
              <div>{infants}</div>
              <button
                onClick={() => updateGuestCount("infants", 1)}
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
                onClick={() => updateGuestCount("pets", -1)}
                disabled={pets === 0}
                className="flex items-center p-2 border-[1px] border-neutral-300 hover:border-black disabled:border-neutral-200 disabled:text-neutral-200 rounded-full"
              >
                <BiMinus size={13} />
              </button>
              <div>{pets}</div>
              <button
                onClick={() => updateGuestCount("pets", 1)}
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

export default GuestInput;
