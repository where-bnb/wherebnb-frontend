"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import Button from "../ui/Button";

import "react-datepicker/dist/react-datepicker.css";
import { calculateDaysOfStay } from "@/utils/helpers";

const RoomCalendar = ({ room }) => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [daysOfStay, setDaysOfStay] = useState(0);

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
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
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
        <Button disabled label="Reserve" onClick={() => {}} />
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        {room.price && (
          <>
            <div>Total</div>
            <div>$ {room.price * daysOfStay}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default RoomCalendar;
