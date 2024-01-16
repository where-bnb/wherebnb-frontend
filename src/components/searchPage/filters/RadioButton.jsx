"use client";

import { useState } from "react";

const RadioButton = ({ label, name, value, id, checked }) => {
  return (
    <div>
      <input
        defaultChecked={checked}
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
