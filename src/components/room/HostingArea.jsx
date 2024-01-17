import RoomMap from "./RoomMap";

const HostingArea = ({ address }) => {
  const { country, state, city, latitude, longitude } = address;
  return (
    <div className="flex flex-col gap-4 py-6">
      <div className="text-xl font-medium">호스팅 지역</div>
      <RoomMap latitude={latitude} longitude={longitude} />
      <div>
        {state}, {city}, {country}
      </div>
    </div>
  );
};

export default HostingArea;
