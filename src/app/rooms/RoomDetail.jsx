"use client";
import { useCallback, useMemo } from "react";
import RoomHead from "@/components/room/RoomHead";
import RoomInfo from "@/components/room/RoomInfo";
import Container from "@/components/ui/Container";
import { CATEGORIES } from "@/utils/iconMaker";
import RoomReview from "@/components/room/RoomReview";
import HostingArea from "@/components/room/HostingArea";
import RoomCalendar from "@/components/room/RoomCalendar";
import axios from "axios";

const roomInfo = {
  price: 100,
};

const RoomDetail = ({ room }) => {
  const { propertyType, propertyDetail, address, guestFavorite } = room;
  const category = useMemo(() => {
    return CATEGORIES.find((items) => items.label === room.category);
  }, [room.category]);

  const onCreateReservation = useCallback(() => {
    // 로그인 여부 체크
    // server action or api router
  }, []);
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
              category={category}
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
              <RoomCalendar room={roomInfo} />
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
