import { getBookRoomById } from "@/actions/getRoomById";
import { getCurrentUser } from "@/actions";
import BookHeader from "@/components/book/BookHeader";
import BookDetail from "./BookDetail";

const BookPage = async ({ params }) => {
  const room = await getBookRoomById(params);
  const currentUser = await getCurrentUser();
  const propertyId = params.roomId;

  return (
    <main className=" space-y-8">
      <BookHeader />
      <BookDetail room={room} propertyId={propertyId} userId={currentUser.id} />
    </main>
  );
};

export default BookPage;
