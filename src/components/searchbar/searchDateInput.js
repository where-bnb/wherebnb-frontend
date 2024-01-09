"use client";

import { useCallback } from "react";

const SearchDateInput = ({ name, label, placeholder, isOpen, setIsOpen }) => {
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => {
      if (value === name) return "";
      return name;
    });
  }, []);

  return (
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
    </div>
  );
};

export default SearchDateInput;
