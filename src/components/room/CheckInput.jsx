"use client";
import { useCallback } from "react";
import { DatePicker, useDatePickReset } from "@bcad1591/react-date-picker";
import { IoClose } from "react-icons/io5";

const CheckInput = ({ name, label, placeholder, isOpen, setIsOpen }) => {
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
      <div className="w-full cursor-pointer" onClick={toggleOpen}>
        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-col">
            <div className="text-xs font-bold">{label}</div>
            <div
              className={`text-sm font-normal ${
                isOpen ? "text-neutral-400" : "text-neutral-500"
              }`}
            >
              {placeholder}
            </div>
          </div>
          {isOpen && (
            <button
              onClick={(e) => resetDate(e)}
              className="rounded-full p-2 hover:bg-neutral-100"
            >
              <IoClose />
            </button>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-50 right-0 top-[40%]">
          <DatePicker disablePreviousDays />
        </div>
      )}
    </>
  );
};

export default CheckInput;
