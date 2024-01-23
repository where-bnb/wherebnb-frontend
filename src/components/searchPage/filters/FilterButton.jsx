"use client";

import useFilterModal from "@/hooks/useFilterModal";
import { useDetailFilter } from "@/hooks/useSearchFilter";
import { useEffect, useState } from "react";
import { BsSliders } from "react-icons/bs";

const FilterButton = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const filterModal = useFilterModal();

  return (
    <button
      onClick={filterModal.onOpen}
      className={`
        flex flex-row flex-shrink-0
        align-middle
        justify-center
        py-3 mt-3
        w-[85px] h-[50px] 
        border-[1.5px]
        gap-2 rounded-xl
        ${isFiltered ? "border-black" : " border-neutral-300 "}
    `}
    >
      <BsSliders className="h-full" />
      <div className="text-[13px] font-bold h-full flex flex-col justify-center">
        필터
      </div>
    </button>
  );
};

export default FilterButton;
