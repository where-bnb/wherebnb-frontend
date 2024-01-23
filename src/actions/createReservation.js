"use server";
import { authApi } from "@/lib/axios";

export async function createReservation(propertyId, reservationData) {
  try {
    console.log("create reservation server action!");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await authApi.post(
      `/rooms/booking/${propertyId}`,
      reservationData,
    );
    return {
      status: 200,
      data: "hello world",
    };
  } catch (err) {}
}
