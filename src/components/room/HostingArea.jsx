import RoomMap from "./RoomMap";

const HostingArea = () => {
  return (
    <div className="flex flex-col gap-4 py-6">
      <div className="text-xl font-medium">호스팅 지역</div>
      <RoomMap />
      <div>용산구, 서울특별시, 대한민국</div>
    </div>
  );
};

export default HostingArea;
