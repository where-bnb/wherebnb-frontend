"use client";

import Image from "next/image";
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
      {isOpen && (
        <div
          className="
        absolute
        top-[120%]
        left-0
        z-10
        bg-white
        shadow-lg
        rounded-[40px]
        w-[405px]
        py-2
        px-8
      "
        >
          <div className="text-lg font-semibold p-4">추천 지역</div>
          <div
            className="
            grid grid-cols-2 gap-8 p-3
          "
          >
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-[150px] h-[130px]">
                <Image
                  fill
                  className="rounded-xl border-[1px] border-neutral-300"
                  src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"
                />
              </div>
              <div className="text-sm">유럽</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-[150px] h-[130px]">
                <Image
                  fill
                  className="rounded-xl border-[1px] border-neutral-300"
                  src="https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320"
                />
              </div>
              <div className="text-sm">일본</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-[150px] h-[130px]">
                <Image
                  fill
                  className="rounded-xl border-[1px] border-neutral-300"
                  src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320"
                />
              </div>
              <div className="text-sm">동남아</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-[150px] h-[130px]">
                <Image
                  fill
                  className="rounded-xl border-[1px] border-neutral-300"
                  src="https://a0.muscache.com/im/pictures/42a1fb0f-214c-41ec-b9d7-135fbbdb8316.jpg?im_w=320"
                />
              </div>
              <div className="text-sm">호주</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchTextInput;
