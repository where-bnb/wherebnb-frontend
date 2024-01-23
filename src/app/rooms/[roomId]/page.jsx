import RoomDetail from "../RoomDetail";
import { getRoomById } from "@/actions/getRoomById";
import Container from "@/components/ui/Container";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/actions/getCurrentUser";
import ReviewModal from "@/components/room/ReviewModal";
import SearchHeader from "@/components/ui/header/SearchHeader";

const RoomDetailPage = async ({ params }) => {
  const room = await getRoomById(params);
  const currentUser = await getCurrentUser();

  if (Object.keys(room).length < 1) {
    return notFound();
  }

  return (
    <Container>
      <SearchHeader />
      <ReviewModal guestFavorite={room.guestFavorite} scores={room.scores} />
      <RoomDetail room={room} currentUser={currentUser} />
    </Container>
  );
};

export default RoomDetailPage;
