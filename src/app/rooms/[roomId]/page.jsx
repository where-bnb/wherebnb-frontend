import EmptyState from "@/components/room/EmptyState";
import RoomDetail from "../RoomDetail";
import { getRoomById } from "@/actions/getRoomById";
import RoomContentModal from "@/components/room/RoomContentModal";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/actions/getCurrentUser";
import ReviewModal from "@/components/room/ReviewModal";

const RoomDetailPage = async ({ params }) => {
  const room = await getRoomById(params);
  const currentUser = await getCurrentUser();

  if (Object.keys(room).length < 1) {
    return notFound();
  }

  return (
    <>
      <ReviewModal guestFavorite={room.guestFavorite} scores={room.scores} />
      <RoomDetail room={room} currentUser={currentUser} />
    </>
  );
};

export default RoomDetailPage;
