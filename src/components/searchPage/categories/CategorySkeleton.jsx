const CategorySkeleton = () => {
  return (
    <div
      className="flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        pt-6 
        p-3
        pb-0"
    >
      <div
        className="
          rounded-full
          bg-gray-300 animate-pulse
        "
      ></div>
      <div className="pb-3 border-b-2">
        <span className=" bg-gray-300 h-2 rounded-full animate-pulse"></span>
      </div>
    </div>
  );
};

export default CategorySkeleton;
