import { useCallback } from "react";

const MarkerIcon = ({ onClick, room, selected }) => {
  const toggleInfoWindow = useCallback((propertyId) => {
    onClick(propertyId);
  }, []);

  return (
    <>
      <div
        onClick={() => toggleInfoWindow(room.propertyId)}
        className={`
    flex
    justify-center
    size-fit
    rounded-2xl
    border-[1px]
    shadow-lg
    py-1 px-2
    ${selected ? "border-neutral-800" : "border-neutral-300"}
    ${selected ? "bg-black" : "bg-white"}
    ${selected ? "text-white" : "text-black"}
   `}
      >
        <div className="whitespace-nowrap text-sm font-bold">
          ₩ {Number(room.price).toLocaleString()}
        </div>
      </div>
      {selected && <div className="bg-white">infowindow</div>}
    </>
  );
};

export default MarkerIcon;
