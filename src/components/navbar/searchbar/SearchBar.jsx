"use client";

import SearchTextInput from "./SearchTextInput";
import { useState } from "react";
import SearchDateInput from "./searchDateInput";
import SearchGuestInput from "./SearchGuestInput";
import { useDatePickGetter } from "@bcad1591/react-date-picker";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { updateQuery } from "@/utils/updateQuery";
import { useQueryClient } from "@tanstack/react-query";
import { useDateFilter } from "@/hooks/useSearchFilter";

const SearchBar = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [isSelected, setIsSelected] = useState("");
  const { pickedDates } = useDatePickGetter();
  const { checkinPlaceholder, checkoutPlaceholder } = useDateFilter.getState();

  const handleClick = (e) => {
    e.stopPropagation();

    // 쿼리 파라미터 갱신
    const url = updateQuery("/s", params);

    // 기존 쿼리 무효화, refetch
    if (pathname === "/s") {
      queryClient.invalidateQueries([`${pathname}`]);
    }

    // 페이지 이동
    router.push(url);
  };

  return (
    <div
      className={`
            border-[1px]
            w-[80%]
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
                relative
                w-full
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
          placeholder={
            checkinPlaceholder !== ""
              ? checkinPlaceholder
              : pickedDates?.firstPickedDate
              ? `${
                  pickedDates?.firstPickedDate.getMonth() + 1
                }월 ${pickedDates?.firstPickedDate.getDate()}일`
              : "날짜 추가"
          }
          isOpen={isSelected === "checkIn"}
          setIsOpen={setIsSelected}
        />
        <SearchDateInput
          name="checkOut"
          label="체크아웃"
          placeholder={
            checkoutPlaceholder !== ""
              ? checkoutPlaceholder
              : pickedDates?.secondPickedDate
              ? `${
                  pickedDates?.secondPickedDate.getMonth() + 1
                }월 ${pickedDates?.secondPickedDate.getDate()}일`
              : "날짜 추가"
          }
          isOpen={isSelected === "checkOut"}
          setIsOpen={setIsSelected}
        />
        <SearchGuestInput
          name="guestInfo"
          label="여행자"
          placeholder="게스트 추가"
          isOpen={isSelected === "guestInfo"}
          setIsOpen={setIsSelected}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SearchBar;
