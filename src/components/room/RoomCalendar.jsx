"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { DatePicker, useDatePickGetter } from "@bcad1591/react-date-picker";
import CheckInput from "./CheckInput";
import GuestInput from "./GuestInput";
import useLoginModal from "@/hooks/useLoginModal";
import { calculateDaysOfStay } from "@/utils/helpers";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const RoomCalendar = ({ price, bookings, currentUser }) => {
  const loginModal = useLoginModal();
  const { pickedDates } = useDatePickGetter();
  const [isSelected, setIsSelected] = useState("");
  const [daysOfStay, setDaysOfStay] = useState(0);
  const [guest, setGuest] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const router = useRouter();
  const formatDate = (date) => {
    return date.toISOString().split("T")[0]; // 날짜를 'YYYY-MM-DD' 형식으로 포맷
  };

  const onCreateReservation = async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    if (!pickedDates.firstPickedDate) {
      toast.error("체크인 날짜를 선택해주세요.");
      return;
    }

    if (!pickedDates.secondPickedDate) {
      toast.error("체크아웃 날짜를 선택해주세요.");
      return;
    }

    const allGuestsZero = Object.values(guest).every((value) => value === 0);
    if (allGuestsZero) {
      toast.error("최소 한 명 이상의 게스트를 추가해주세요.");
      return;
    }

    let queryString = `?checkin=${formatDate(
      pickedDates.firstPickedDate,
    )}&checkout=${formatDate(pickedDates.secondPickedDate)}`;

    Object.entries(guest).forEach(([key, value]) => {
      if (value > 0) {
        queryString += `&${key}=${value}`;
      }
    });

    router.push(`/book/332${queryString}`);
  };

  useEffect(() => {
    if (pickedDates.firstPickedDate && pickedDates.secondPickedDate) {
      const days = calculateDaysOfStay(
        pickedDates.firstPickedDate,
        pickedDates.secondPickedDate,
      );

      setDaysOfStay(days);
    }
  }, [pickedDates.firstPickedDate, pickedDates.secondPickedDate]);

  return (
    <div className="relative">
      <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
        <div className="flex flex-row items-center gap-1 p-4">
          <div className="text-2xl font-semibold">$ 150</div>
          <div className="font-light text-neutral-600">night</div>
        </div>
        <hr />
        <div className="p-4">
          <div className="w-full grid grid-rows-2 grid-cols-2 border border-neutral-200  divide-neutral-200 rounded-xl">
            <div className="row-span-1 col-span-1 p-4 border-r flex items-center  hover:bg-neutral-200">
              {/* 체크인 */}
              <CheckInput
                name="checkIn"
                label="체크인"
                placeholder={
                  pickedDates?.firstPickedDate
                    ? `${
                        pickedDates?.firstPickedDate.getMonth() + 1
                      }월 ${pickedDates?.firstPickedDate.getDate()}일`
                    : "날짜 추가"
                }
                isOpen={isSelected === "checkIn"}
                setIsOpen={setIsSelected}
              />
            </div>
            <div className="row-span-1 col-span-1 p-4 flex items-center hover:bg-neutral-200">
              {/* 체크아웃 */}
              <CheckInput
                name="checkOut"
                label="체크아웃"
                placeholder={
                  pickedDates?.secondPickedDate
                    ? `${
                        pickedDates?.secondPickedDate.getMonth() + 1
                      }월 ${pickedDates?.secondPickedDate.getDate()}일`
                    : "날짜 추가"
                }
                isOpen={isSelected === "checkOut"}
                setIsOpen={setIsSelected}
              />
            </div>
            <div className="row-span-1 col-span-2 border-t flex items-center cursor-pointer hover:bg-neutral-200">
              <GuestInput
                name="guestInfo"
                label="인원"
                placeholder="게스트 추가"
                isOpen={isSelected === "guestInfo"}
                setIsOpen={setIsSelected}
                guest={guest}
                setGuest={setGuest}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="p-4">
          <Button label="예약하기" onClick={onCreateReservation} />
        </div>
        <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
          <div>Total</div>
          <div>$ {daysOfStay * price}</div>
        </div>
      </div>
    </div>
  );
};

export default RoomCalendar;
