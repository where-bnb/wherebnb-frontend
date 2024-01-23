"use client";

import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import Button from "../ui/Button";
import * as actions from "@/actions";
import "react-datepicker/dist/react-datepicker.css";
import { calculateDaysOfStay } from "@/utils/helpers";
import useLoginModal from "@/hooks/useLoginModal";

const RoomCalendar = ({ price, bookings, currentUser }) => {
  // TODO : main -> detail  query string으로 인원정보 및 날짜정보 가져와서 초기값 세팅
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [daysOfStay, setDaysOfStay] = useState(0);

  const loginModal = useLoginModal();

  const router = useRouter();
  const formatDate = (date) => {
    return date.toISOString().split("T")[0]; // 날짜를 'YYYY-MM-DD' 형식으로 포맷
  };

  const onChange = (dates) => {
    const [checkInDate, checkOutDate] = dates;

    setCheckInDate(checkInDate);
    setCheckOutDate(checkOutDate);

    if (checkInDate && checkOutDate) {
      // check booking availability
      const days = calculateDaysOfStay(checkInDate, checkOutDate);
      setDaysOfStay(days);
    }
  };

  const [isPending, startTransition] = useTransition();

  const onCreateReservation = async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    // server action or api router
    const reservationData = {
      checkInDate,
      checkOutDate,
      daysOfStay,
    };

    // const queryString = `?checkInDate=${formatDate(
    //   checkInDate,
    // )}&checkOutDate=${formatDate(checkOutDate)}`;
    // router.push(`/book/332${queryString}`);
  };

  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center p-4">
        <DatePicker
          selected={checkInDate}
          onChange={onChange}
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={new Date()}
          selectsRange
          inline
        />
      </div>
      <hr />
      <div className="p-4">
        <Button
          label="예약하기"
          disabled={isPending}
          onClick={onCreateReservation}
        />
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        {price && (
          <>
            <div>Total</div>
            <div>$ {price * daysOfStay}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default RoomCalendar;
