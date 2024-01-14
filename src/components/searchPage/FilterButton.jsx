import { BsSliders } from "react-icons/bs";

const FilterButton = () => {
  return (
    <button
      className="
    flex flex-row flex-shrink-0
    align-middle
    justify-center
    py-3
    w-[85px] h-[50px] 
    border-neutral-300 
    border-[1.5px]
    gap-2 rounded-xl
"
    >
      <BsSliders className="h-full" />
      <div className="text-[13px] font-bold h-full flex flex-col justify-center">
        필터
      </div>
    </button>
  );
};

export default FilterButton;
