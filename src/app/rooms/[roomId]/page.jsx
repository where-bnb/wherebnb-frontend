import EmptyState from "@/components/room/EmptyState";
import RoomDetail from "../RoomDetail";
import { getRoomById } from "@/actions/getRoomById";
import RoomContentModal from "@/components/room/RoomContentModal";

const RoomDetailPage = async ({ params }) => {
  const room = await getRoomById(params);
  console.log("room", room);

  if (!room) {
    return <EmptyState />;
  }

  return (
    <>
      <RoomContentModal />
      <RoomDetail room={room} />
    </>
  );
};

export default RoomDetailPage;
