const MarkerIcon = ({ price }) => {
  return (
    <div className="flex  justify-center size-fit rounded-2xl border-[1px] border-neutral-300 shadow-md py-1 px-2 bg-white">
      <div className="whitespace-nowrap text-sm font-bold">
        ₩ {Number(price).toLocaleString()}
      </div>
    </div>
  );
};

export default MarkerIcon;
