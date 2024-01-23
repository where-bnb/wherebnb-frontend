"use client";

import { useRouter, useSearchParams } from "next/navigation";
import HeartButton from "./HeartButton";
import ImageSwiper from "../swiper/ImageSwiper";
import { useSession } from "next-auth/react";

const ListingCard = ({ room, id, currentUser }) => {
  const router = useRouter();
  const params = useSearchParams();

  return (
    <div
      onClick={() => router.push(`/rooms/${id}?${params.toString()}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-[9/8]
            w-full
            relative
            overflow-hidden
            rounded-xl
          "
        >
          <div className="absolute top-4 right-4 z-[8]">
            <HeartButton listingId={id} currentUser={currentUser} />
          </div>
          <ImageSwiper images={room.images} />
        </div>
        <div className="flex flex-row justify-between text-md">
          <div className="font-semibold truncate">
            {room.address.country} {room.address.city}
          </div>
          <div className="font-light w-[93px] whitespace-nowrap text-right">
            ★ {room.totalScore} ({room.reviews})
          </div>
        </div>
      </div>
      <div className="text-sm font-light text-neutral-500 truncate">
        호스트: {room.User.name}
      </div>
      <div className="text-sm font-light text-neutral-500 truncate">
        {room.propertyExplanation}
      </div>
      <div className="flex flex-row items-center gap-1">
        <div className="font-semibold">
          ₩ {Number(room.price).toLocaleString()}
        </div>
        <div className="tracking-wider">/박</div>
      </div>
    </div>
  );
};

export default ListingCard;
