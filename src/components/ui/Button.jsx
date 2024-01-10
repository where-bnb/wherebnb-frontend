"use client";
const Button = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:brightness-90
        transition
        w-full
        ${outline ? "bg-white" : "bg-primary"}
        ${outline ? "border-black border-[0.5px]" : "border-primary"}
        ${outline ? "text-black" : "text-white"}
        ${outline ? "hover:bg-neutral-400/20" : null}
        ${small ? "py-1" : "py-3"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {disabled ? (
        <div className="w-full min-h-6 relative flex justify-center items-center gap-2">
          <div
            className={`w-2 h-2 ${
              outline ? "bg-primary" : "bg-gray-300"
            } rounded-full`}
          />
          <div
            className={`w-2 h-2 ${
              outline ? "bg-primary" : "bg-gray-200"
            } rounded-full`}
          />
          <div
            className={`w-2 h-2 ${
              outline ? "bg-primary" : "bg-white"
            } rounded-full`}
          />
        </div>
      ) : (
        <div className="min-h-6">{label}</div>
      )}
    </button>
  );
};

export default Button;
