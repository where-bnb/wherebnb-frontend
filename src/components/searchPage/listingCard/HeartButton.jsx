"use client";

import { getFavoriteList } from "@/actions";
import { useFavorite } from "@/hooks/useFavorite";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const HeartButton = ({ listingId }) => {
  const { data: session } = useSession();
  const wishList = session?.user?.wishList;
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    wishList,
  });

  return (
    <div
      // onClick={toggleFavorite}
      className="
          relative
          hover:opacity-80
          transition
          cursor-pointer
      "
    >
      <AiOutlineHeart
        size={28}
        className="
              fill-white
              absolute
              -top-[2px]
              -right-[2px]
              "
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? "fill-accent" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
