"use client";

import useFavorite from "@/hooks/useFavorite";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const HeartButton = ({ listingId, currentUser, children }) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <>
      <div
        id={listingId}
        onClick={toggleFavorite}
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
      {children}
    </>
  );
};

export default HeartButton;
