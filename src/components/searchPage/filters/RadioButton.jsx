"use client";

import { useDetailFilter } from "@/hooks/useSearchFilter";
import { useCallback, useMemo, useState } from "react";

const RadioButton = ({ label, name, value, id, defaultChecked, selected }) => {
  const { min_bedrooms, min_beds, min_bathrooms } = useDetailFilter(
    (state) => state
  );
  const { setMinBedrooms, setMinBeds, setMinBathrooms } = useDetailFilter();

  const handleClick = useCallback((e) => {
    switch (e.target.name) {
      case "bedroom":
        setMinBedrooms(Number(e.target.value));
        break;
      case "bed":
        setMinBeds(Number(e.target.value));
        break;
      case "bathroom":
        setMinBathrooms(Number(e.target.value));
        break;
    }
  }, []);

  return (
    <div>
      <input
        onClick={handleClick}
        defaultChecked={defaultChecked}
        checked={selected}
        type="radio"
        name={name}
        id={id}
        value={value}
        className="peer hidden"
      />
      <label
        htmlFor={id}
        className={`
        cursor-pointer
        select-none
        rounded-full
        py-[10px]
        px-6
        border-neutral-200
        border-[1px]
        peer-checked:text-white
        peer-checked:bg-black
        peer-checked:border-black
        hover:border-black
        text-sm
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
