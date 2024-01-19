"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import HeartButton from "./HeartButton";
import ImageSwiper from "../swiper/ImageSwiper";
import { useSession } from "next-auth/react";
import { useAxiosAuth } from "@/hooks/useAxiosAuth";

const ListingCard = ({ favoriteListing, id }) => {
  const router = useRouter();

  // ClientSide axios instance Test용  --------------------------------
  // const { data: session } = useSession();

  // const axiosAuth = useAxiosAuth();
  // const getData = async () => {
  //   if (session) {
  //     const data = await axiosAuth.get(
  //       `/users/${session?.user.userId}/favorite`
  //     );
  //     console.log(data);
  //   }
  // };
  // getData();
  // ---------------------------------------------------------------

  return (
    <div
      onClick={() => router.push(`/rooms/${id}`)}
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
            <HeartButton listingId={id} />
          </div>
          <ImageSwiper />
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
