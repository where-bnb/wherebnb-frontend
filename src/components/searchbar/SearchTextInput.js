"use client";

import { useCallback, useState } from "react";

const SearchTextInput = ({
  name,
  disabled,
  label,
  placeholder,
  isOpen,
  setIsOpen,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => {
      if (value === name) return "";
      return name;
    });
  }, []);

  return (
    <>
      <div
        onClick={toggleOpen}
        className={`
                h-full
                text-sm
                pl-3
                font-semibold
                grow
                rounded-full
                cursor-pointer
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
          <div
            className="
                text-xs
              "
          >
            {label}
          </div>
          <input
            type="text"
            placeholder={placeholder}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={`
                h-full
                font-normal
                bg-white
                bg-opacity-0
                border-none
                focus:outline-none
                cursor-pointer
                ${
                  isOpen ? "placeholder-neutral-400" : "placeholder-neutral-500"
                }
              `}
            disabled={disabled}
          />
        </div>
      </div>
    </>
  );
};

export default SearchTextInput;
