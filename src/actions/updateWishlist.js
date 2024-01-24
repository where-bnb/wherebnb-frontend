"use server";

import { authApi } from "@/lib/axios";

export const addWishlist = async (userId, listingId) => {
  try {
    const res = await authApi.post(`/${userId}/wishlist/${listingId}`);
    return res.status;
  } catch (error) {
    return error.response ? error.response.status : 500;
  }
};

export const removeWishlist = async (userId, listingId) => {
  try {
    const res = await authApi.delete(`/${userId}/wishlist/${listingId}`);
    return res.status;
  } catch (error) {
    return error.response ? error.response.status : 500;
  }
};
