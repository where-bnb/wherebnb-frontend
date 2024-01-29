import RoomDetail from "../RoomDetail";
import { getRoomById } from "@/actions/getRoomById";
import Container from "@/components/ui/Container";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/actions/getCurrentUser";
import ReviewModal from "@/components/room/ReviewModal";
import SearchHeader from "@/components/ui/header/SearchHeader";
import RoomDescModal from "@/components/room/RoomDescModal";
import RoomContentModal from "@/components/room/RoomContentModal";

const RoomDetailPage = async ({ params }) => {
  const room = await getRoomById(params);
  const currentUser = await getCurrentUser();
  const propertyId = params.roomId;

  if (Object.keys(room).length < 1) {
    return notFound();
  }

  return (
    <Container>
      <SearchHeader />
      <ReviewModal
        guestFavorite={room.guestFavorite}
        scores={room.scores}
        reviewCount={room.reviews.length}
      />
      <RoomDescModal propertyExplanation={room.propertyExplanation} />
      <RoomContentModal contents={room.amenities} />
      <RoomDetail
        room={room}
        currentUser={currentUser}
        propertyId={propertyId}
      />
    </Container>
  );
};

export default RoomDetailPage;
