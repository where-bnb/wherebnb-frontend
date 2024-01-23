import { useCallback } from "react";

const SelectButton = ({
  icon: Icon,
  title,
  subtitle,
  big,
  onClick,
  value,
  selected,
}) => {
  const handleClick = useCallback(() => {
    if (value) {
      onClick(value, selected);
    } else {
      onClick();
    }
  }, [onClick, value, selected]);

  if (big) {
    return (
      <button
        onClick={handleClick}
        className={`flex flex-col w-[350px] h-[150px] gap-2 p-6 rounded-xl hover:border-black
        ${selected ? "border-black" : "border-neutral-200"}
        ${selected ? "border-[2px]" : "border-[1px]"}
        ${selected ? "bg-neutral-100" : "bg-white"}
        `}
      >
        <Icon size={40} />
        <div className="font-medium">{title}</div>
        {subtitle && (
          <div className="text-sm font-light text-neutral-700">{subtitle}</div>
        )}
      </button>
    );
  } else {
    return (
      <button
        onClick={handleClick}
        className={`flex flex-col justify-between w-full h-[125px] gap-2 p-4 rounded-xl hover:border-black
        ${selected ? "border-black" : "border-neutral-200"}
        ${selected ? "border-[2px]" : "border-[1px]"}
        ${selected ? "bg-neutral-100" : "bg-white"}
        `}
      >
        <Icon size={30} />
        <div className="font-medium text-left">{title}</div>
        {subtitle && (
          <div className="text-sm font-light text-neutral-500">{subtitle}</div>
        )}
      </button>
    );
  }
};

export default SelectButton;
