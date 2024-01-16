"use client";
import { useMemo } from "react";
import RoomHead from "@/components/room/RoomHead";
import RoomInfo from "@/components/room/RoomInfo";
import Container from "@/components/ui/Container";
import { CATEGORIES } from "@/utils/iconMaker";
import RoomReview from "@/components/room/RoomReview";
import RoomMap from "@/components/room/RoomMap";

const RoomDetail = () => {
  // const category = useMemo(() => {
  //   return categories.find((items) => items.label === listing.category);
  // }, [listing.category]);
  const category = useMemo(() => {
    return CATEGORIES.find((items) => items.label === "Beach");
  }, []);
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <RoomHead />
          <div
            className="
              grid grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <RoomInfo category={category} />
            <div>캘린더</div>
          </div>
          <div>날짜 선택</div>
          <hr />
          <RoomReview />
          <hr />
          <RoomMap />
          <div>알아두어야 할 사항</div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetail;
