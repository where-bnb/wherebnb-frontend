"use client";

import { useEffect, useState, useTransition } from "react";
import PaymentInfo from "@/components/book/PaymentInfo";
import PaymentSummary from "@/components/book/PaymentSummary";
import { useSearchParams } from "next/navigation";
import { calculateDaysOfStay } from "@/utils/helpers";
import { createReservation } from "@/actions";

const BookDetail = ({ room, propertyId, userId }) => {
  const [guest, setGuest] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [dayOfStay, setDayOfStay] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [placeholder, setPlaceholder] = useState(null);

  const [isPending, startTransition] = useTransition();

  const params = useSearchParams();

  const checkin = params.get("checkin");
  const checkout = params.get("checkout");
  const adults = parseInt(params.get("adults") || 0);
  const children = parseInt(params.get("children") || 0);
  const infants = parseInt(params.get("infants") || 0);
  const pets = parseInt(params.get("pets") || 0);

  useEffect(() => {
    setCheckinDate(checkin);
    setCheckoutDate(checkout);
    setGuest({
      adults,
      children,
      infants,
      pets,
    });

    const days = calculateDaysOfStay(checkin, checkout);
    const total = days * room.pricePerDay;
    setDayOfStay(days);
    setTotalPrice(total);
  }, [checkin, checkout, adults, children, infants, pets]);

  useEffect(() => {
    if (adults && children && infants && pets) {
      setPlaceholder(
        `게스트 ${adults}명, 어린이 ${children}명, 유아 ${infants}명, 반려동물 ${pets}`,
      );
    } else if (adults && children && infants) {
      setPlaceholder(
        `게스트 ${adults}명, 어린이 ${children}명, 유아 ${infants}명`,
      );
    } else if (adults && children && pets) {
      setPlaceholder(
        `게스트 ${adults}명, 어린이 ${children}명, 반려동물 ${pets}`,
      );
    } else if (adults && infants && pets) {
      setPlaceholder(`게스트 ${adults}명, 유아 ${infants}명, 반려동물 ${pets}`);
    } else if (adults && children) {
      setPlaceholder(`게스트 ${adults}명, 어린이 ${children}명`);
    } else if (adults && infants) {
      setPlaceholder(`게스트 ${adults}명, 유아 ${infants}명`);
    } else if (adults && pets) {
      setPlaceholder(`게스트 ${adults}명, 반려동물 ${pets}`);
    } else {
      setPlaceholder(`게스트 ${adults}명`);
    }
  }, [adults, children, infants, pets]);

  const handleSubmit = () => {
    startTransition(async () => {
      return await createReservation(
        propertyId,
        userId,
        checkinDate,
        checkoutDate,
        guest,
      );
    });
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        <PaymentInfo
          checkinDate={checkinDate}
          checkoutDate={checkoutDate}
          placeholder={placeholder}
          handleSubmit={handleSubmit}
          isPending={isPending}
        />
        <PaymentSummary
          dayOfStay={dayOfStay}
          totalPrice={totalPrice}
          {...room}
        />
      </div>
    </div>
  );
};

export default BookDetail;
