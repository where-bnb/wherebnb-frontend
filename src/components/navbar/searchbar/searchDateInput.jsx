"use client";

import { useCallback, useEffect } from "react";
import {
  DatePicker,
  useDatePickGetter,
  useDatePickReset,
} from "@bcad1591/react-date-picker";
import { IoClose } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";

const SearchDateInput = ({ name, label, placeholder, isOpen, setIsOpen }) => {
  const router = useRouter();
  const params = useSearchParams();
  const { pickedDates } = useDatePickGetter();
  const resetDatePicker = useDatePickReset();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => {
      if (value === name) return "";
      return name;
    });
  }, []);

  const resetDate = useCallback((e) => {
    e.stopPropagation();
    resetDatePicker();
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
