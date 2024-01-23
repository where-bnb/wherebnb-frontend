"use client";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg py-3 px-6 bg-white  border-black border-[0.5px] hover:bg-neutral-400/20 text-sm"
    >
      {label}
    </button>
  );
};

export default Button;
