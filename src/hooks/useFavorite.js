import { useRouter } from "next/navigation";
import useLoginModal from "./useLoginModal";
import { useCallback, useMemo } from "react";
import { authApi } from "@/lib/axios";
import toast from "react-hot-toast";
import { getFavoriteList } from "@/actions";
import { useSession } from "next-auth/react";

export const useFavorite = ({ listingId, wishList }) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: session } = useSession();

  const hasFavorited = useMemo(() => {
    if (!session) return false;
    if (!wishList) return null;

    return wishList.includes(Number(listingId));
  }, [wishList, listingId]);

  const toggleFavorite = useCallback(
    async (e) => {
      e.stopPropagation();

      if (!currentUser) {
        loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavorited) {
          const deletedList = wishList.filter((room) => room.id !== listingId);

          request = authApi.patch(
            `/users/${currentUser.id}`,
            json.stringify({ favoriteLists: deletedList })
          );
        } else {
          const addedList = [...wishList, listingId];
          request = authApi.patch(
            `/users/${currentUser.id}`,
            json.stringify({ favoriteLists: addedList })
          );
        }

        await request();
        router.refresh();
        toast.success("위시리스트에 추가되었습니다.");
      } catch (error) {
        toast.error("문제가 발생했습니다.");
        console.log("useFavorite err: ", error);
      }
    },
    [wishList, hasFavorited, listingId, loginModal, router]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};
