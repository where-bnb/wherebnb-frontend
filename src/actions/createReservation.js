"use server";
import { authApi } from "@/lib/axios";
import { redirect } from "next/navigation";

export async function createReservation(
  propertyId,
  userId,
  checkinDate,
  checkoutDate,
  guest,
) {
  let reservationData = {
    paymentRequest: {
      email: "honggildong@example.com",
      paymentMethod: "CARD",
      cardNumber: "1234-1234-1234-1234",
      expirationMonth: "02",
      expirationYear: "28",
      cvc: 123,
      totalPrice: 324593,
      nation: "KOREA",
    },
  };
  reservationData.userId = userId;
  reservationData.checkInDate = checkinDate;
  reservationData.checkOutDate = checkoutDate;
  reservationData.numberOfAdults = guest?.adults ?? 0;
  reservationData.numberOfChidlren = guest?.children ?? 0;
  reservationData.numberOfInfants = guest?.infants ?? 0;
  try {
    console.log("create reservation server action!", propertyId);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await authApi.post(
      `/rooms/booking/${propertyId}`,
      reservationData,
    );
    console.log("response!!", response.status);
    if (response.status === 201) {
      console.log("response.data", response.data);
    } else if (response.status === 503) {
      console.log("503 에러", response.data);
    } else {
      throw new Error("서버 오류가 발생했습니다.");
    }
  } catch (err) {
    console.log("에러가 발생!", err.response.status);
    if (err.response.status === 503) {
      throw new Error(err.response.data);
    } else {
      throw new Error("에러가 발생하였습니다.");
    }
  }

  redirect("/book/complete");
}
