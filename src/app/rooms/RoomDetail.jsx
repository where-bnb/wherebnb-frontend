"use client";
import { useEffect, useState } from "react";
import RoomHead from "@/components/room/RoomHead";
import RoomInfo from "@/components/room/RoomInfo";
import RoomReview from "@/components/room/RoomReview";
import HostingArea from "@/components/room/HostingArea";
import useRoomReviewModal from "@/hooks/useRoomReviewModal";
import RoomCalendar from "@/components/room/RoomCalendar";
import { DatePickerProvider } from "@bcad1591/react-date-picker";
import RoomImageModal from "@/components/room/RoomImageModal";
import useRoomDescModal from "@/hooks/useRoomDescModal";


const RoomDetail = ({ room, currentUser, propertyId }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const { propertyType, propertyDetail, address, guestFavorite } = room;
  const reviewModal = useRoomReviewModal();
  const descModal = useRoomDescModal();

  useEffect(() => {
    if (showImageModal || reviewModal.isOpen || descModal.isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [reviewModal.isOpen, showImageModal, descModal.isOpen]);

  return (
    <>
      <RoomImageModal
        setShowImageModal={setShowImageModal}
        showImageModal={showImageModal}
        photos={room.photos}
        currentUser={currentUser}
        propertyId={propertyId}
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <RoomHead
            title={room.propertyName}
            photos={room.photos}
            currentUser={currentUser}
            propertyId={propertyId}
            setShowImageModal={setShowImageModal}
          />
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
              <DatePickerProvider>
                <RoomCalendar
                  price={room.price}
                  bookings={room.bookings}
                  currentUser={currentUser}
                />
              </DatePickerProvider>
            </div>
          </div>
          <hr />
          <RoomReview
            guestFavorite={guestFavorite}
            scores={room.scores}
            reviews={room.reviews}
          />
          <hr />
          <HostingArea address={address} />
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
