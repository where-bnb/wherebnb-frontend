"use client";

import { LiaWonSignSolid } from "react-icons/lia";

const PriceInput = ({
  id,
  value,
  label,

  disabled,

  register,
  required,
  errors,
  helper,
}) => {
  return (
    <div className="w-full relative">
      <LiaWonSignSolid
        size={18}
        className="text-neutral-700 absolute top-6 left-[14px]"
      />
      <input
        id={id}
        value={value}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type="currency"
        className={`
        flex items-baseline
          w-full
          px-3
          pt-5
          pb-1
          font-light
          bg-white
          border-2
          rounded-xl
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          focus:border-black
          pl-10
          ${errors[id] ? "border-error" : "border-neutral-300"}
          ${errors[id] ? "focus:border-error" : "focus:border-neutral-300"}
        `}
      />
      <label
        className={`
          absolute
          text-md
          -translate-y-4
          top-5
          z-10
          origin-[0]
          left-4
          scale-75
          ${errors[id] ? "text-error" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
      {/* todo: error 메시지 helper 위치에 조건부렌더링 */}
      {helper && <small className="text-neutral-500 pl-2">{helper}</small>}
    </div>
  );
};

export default PriceInput;
