"use client";

import { BiDollar } from "react-icons/bi";

const Input = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
  helper,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-4 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
          peer
          w-full
          px-3
          py-4
          font-light
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? "pl-9" : "pl-4"}
          ${errors[id] ? "border-error" : "border-neutral-300"}
          ${errors[id] ? "focus:border-error" : "focus:border-neutral-300"}
        `}
      />
      <label
        className={`
          absolute
          text-md
          duration-150
          transform
          -translate-y-4
          top-4
          z-10
          origin-[0]
          ${formatPrice ? "left-9" : "left-4"}
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
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

export default Input;
