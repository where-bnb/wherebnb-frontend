"use client";
import { useEffect } from "react";
import RoomHead from "@/components/room/RoomHead";
import RoomInfo from "@/components/room/RoomInfo";
import Container from "@/components/ui/Container";
import RoomReview from "@/components/room/RoomReview";
import HostingArea from "@/components/room/HostingArea";
import RoomCalendar from "@/components/room/RoomCalendar";
import useRoomReviewModal from "@/hooks/useRoomReviewModal";

const RoomDetail = ({ room, currentUser }) => {
  const { propertyType, propertyDetail, address, guestFavorite } = room;
  const reviewModal = useRoomReviewModal();

  useEffect(() => {
    if (reviewModal.isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [reviewModal.isOpen]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <RoomHead title={room.propertyName} photos={room.photos} />
          <div
            className="
              grid grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <RoomInfo
              address={address}
              propertyType={propertyType}
              propertyDetail={propertyDetail}
              category={room.category}
              guestFavorite={guestFavorite}
              totalScore={room.scores.totalScore}
              reviewLength={room.reviews.length}
              host={room.host}
              propertyExplanation={room.propertyExplanation}
              amenities={room.amenities}
            />
            <div
              className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
            >
              <RoomCalendar
                price={room.price}
                bookings={room.bookings}
                currentUser={currentUser}
              />
            </div>
          </div>
          <div>날짜 선택</div>
          <hr />
          <RoomReview
            guestFavorite={guestFavorite}
            scores={room.scores}
            reviews={room.reviews}
          />
          <hr />
          <HostingArea address={address} />
          <hr />
          <div>알아두어야 할 사항</div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetail;
