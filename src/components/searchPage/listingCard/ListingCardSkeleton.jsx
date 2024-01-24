const ListingCardSkeleton = ({ number }) => {
  return Array(number)
    .fill(0)
    .map((el, index) => (
      <div key={index}>
        <div className="col-span-1 flex flex-col gap-5 w-full bg-white items-start">
          <div
            className="
            aspect-[9/8]
            w-full
            relative
            overflow-hidden
            rounded-xl
            bg-gray-300 animate-pulse
          "
          ></div>
          <div className="flex flex-col gap-3 w-10/12">
            <span className="w-11/12 bg-gray-300 h-4 rounded-full animate-pulse"></span>
            <span className="w-6/12 bg-gray-300 h-4 rounded-full animate-pulse"></span>
            <span className="w-8/12 bg-gray-300 h-4 rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>
    ));
};

export default ListingCardSkeleton;
