import EmptyState from "@/components/room/EmptyState";
import RoomDetail from "../RoomDetail";
import { getRoomById } from "@/actions/getRoomById";
import RoomContentModal from "@/components/room/RoomContentModal";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/actions/getCurrentUser";

const RoomDetailPage = async ({ params }) => {
  const room = await getRoomById(params);
  const currentUser = await getCurrentUser();
  console.log("current User", currentUser);

  return null;
  if (Object.keys(room).length < 1) {
    return notFound();
  }

  return <RoomDetail room={room} />;
};

export default RoomDetailPage;
