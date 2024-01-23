"use server";

import { authApi } from "@/lib/axios";

export const addWishlist = async (userId, listingId) => {
  console.log("wishlist 추가");

  const res = await authApi.delete(`/${userId}/wishlist/${listingId}`);
  return res.status;
};

export const removeWishlist = async (userId, listingId) => {
  console.log("wishlist 삭제");

  const res = await authApi.post(`/${userId}/wishlist/${listingId}`);
  return res.status;
};
