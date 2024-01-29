"use client";

import { useCallback, useEffect } from "react";
import {
  DatePicker,
  useDatePickGetter,
  useDatePickReset,
} from "@bcad1591/react-date-picker";
import { IoClose } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
import { useDateFilter } from "@/hooks/useSearchFilter";
import dayjs from "dayjs";

const SearchDateInput = ({ name, label, placeholder, isOpen, setIsOpen }) => {
  const { pickedDates } = useDatePickGetter();
  const resetDatePicker = useDatePickReset();
  const {
    setDateFilter,
    resetDateFilter,
    setCheckinPlaceholder,
    setCheckoutPlaceholder,
    resetPlaceholder,
  } = useDateFilter();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => {
      if (value === name) return "";
      return name;
    });
  }, []);

  useEffect(() => {
    // 현재 Zustand 상태
    const { checkin, checkout } = useDateFilter.getState();

    // 현재 상태와 `pickedDates`를 비교
    if (
      checkin !== dayjs(pickedDates.firstPickedDate).format("YYYY-MM-DD") ||
      checkout !== dayjs(pickedDates.secondPickedDate).format("YYYY-MM-DD")
    ) {
      // 값이 없을 경우 : 상태를 변경하지 않음
      if (!pickedDates.firstPickedDate || !pickedDates.secondPickedDate) return;

      // 변경된 상태 Set
      setDateFilter(pickedDates.firstPickedDate, pickedDates.secondPickedDate);
      setCheckinPlaceholder(pickedDates.firstPickedDate);
      setCheckoutPlaceholder(pickedDates.secondPickedDate);
    }
  }, [pickedDates]);

  // 'X' 버튼 클릭 -> 여행 날짜에 관련된 모든 상태 reset
  const resetDate = useCallback((e) => {
    e.stopPropagation();
    resetDatePicker(); // react-date-picker 리셋
    resetDateFilter(); // zustand store 리셋
    resetPlaceholder(); // placeholder 리셋
  }, []);

  return (
    <>
      <div
        onClick={toggleOpen}
        className={`
                hidden 
                md:block
                pl-3
                h-full
                text-sm
                font-semibold
                grow
                rounded-full
                ${!isOpen ? "md:hover:bg-neutral-200" : ""}
                ${isOpen ? "md:bg-white" : ""}
                ${isOpen ? "md:shadow-md" : ""}
            `}
      >
        <div className="flex flex-row justify-between">
          <div
            className="
              h-full
              p-3
              flex
              flex-col
            "
          >
            <div className="text-xs font-bold">{label}</div>
            <div
              className={`
                h-full
                pt-[1px]
                text-sm
                font-normal
                bg-white
                bg-opacity-0
                border-none
                focus:outline-none
                ${isOpen ? "text-neutral-400" : "text-neutral-500"}
              `}
            >
              {placeholder}
            </div>
          </div>
          {isOpen && (
            <button
              onClick={(e) => resetDate(e)}
              className="-translate-x-4 translate-y-4 h-fit w-fit rounded-full p-2 hover:bg-neutral-100"
            >
              <IoClose />
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="
        absolute
        top-[120%]
        -translate-x-10
        z-10
      "
        >
          <DatePicker disablePreviousDays />
        </div>
      )}
    </>
  );
};

export default SearchDateInput;
