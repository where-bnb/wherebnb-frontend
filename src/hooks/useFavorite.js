import { useRouter } from "next/navigation";
import useLoginModal from "./useLoginModal";
import { useCallback, useMemo } from "react";
import { authApi } from "@/lib/axios";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { addWishlist, removeWishlist } from "@/actions";

const useFavorite = ({ listingId, currentUser }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const wishList = currentUser?.favoriteList;

    if (!session) return false;

    return wishList.includes(Number(listingId));
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e) => {
      e.stopPropagation();
      console.log("current user has favorited", currentUser);

      if (!session) {
        return loginModal.onOpen();
      }

      try {
        let res;
        if (hasFavorited) {
          res = await removeWishlist(session?.user.userId, listingId);

          if (res === 200) {
            toast.success("위시리스트에서 삭제되었습니다.");
          }
        } else {
          res = await addWishlist(session?.user.userId, listingId);

          if (res === 200) {
            toast.success("위시리스트에 추가되었습니다.");
          }
        }
      } catch (error) {
        toast.error("문제가 발생했습니다.");
        console.log("useFavorite err: ", error);
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
