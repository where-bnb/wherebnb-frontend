"use client";

import { useCallback } from "react";
import { BiSearch } from "react-icons/bi";

const SearchGuestInput = ({ name, label, placeholder, isOpen, setIsOpen }) => {
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
                w-full
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
              "
          >
            {placeholder}
          </div>
        </div>
      </div>
      <div
        className="
                    p-2
                    bg-primary
                    rounded-full
                    text-white
                "
      >
        <BiSearch size={18} />
      </div>
    </div>
  );
};

export default SearchGuestInput;
