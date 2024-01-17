"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import HeartButton from "./HeartButton";
import ImageSwiper from "../swiper/ImageSwiper";

const ListingCard = ({ currentUser }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/detail`)}
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
          <ImageSwiper />
          {/* <Image
            fill
            alt="Listing"
            src={"/images/placeholder.jpg"}
            className="object-cover h-full w-full group-hover:scale-110 transition"
          /> */}
          <div className="absolute top-4 right-4">
            <HeartButton listingId="id" currentUser={currentUser} />
          </div>
        </div>
        <div className="flex flex-row justify-between text-md">
          <div className="font-semibold">한국 Seoul</div>
          <div className="font-light">★ 4.92</div>
        </div>
      </div>
      <div className="font-light text-neutral-500">reservation date</div>
      <div className="flex flex-row items-center gap-1">
        <div className="font-semibold">₩ Price</div>
        <div className="tracking-wider">/박</div>
      </div>
    </div>
  );
};

export default ListingCard;
