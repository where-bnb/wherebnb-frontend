"use client";
import moment from "moment";
import CreditCardForm from "@/components/book/CreditCardForm";
import { FaCcMastercard } from "react-icons/fa";
import Button from "../ui/Button";

const PaymentInfo = ({
  checkinDate,
  checkoutDate,
  placeholder,
  handleSubmit,
  isPending,
}) => {
  return (
    <div className="md:col-span-4 px-8">
      {/* 예약정보 */}
      <div className="flex flex-col gap-2 border-b pb-6">
        <h2 className="text-xl">예약 정보</h2>
        <p className="text-md font-semibold">날짜</p>
        {checkinDate && checkoutDate && (
          <div className="text-sm">
            {checkinDate} ~ {checkoutDate}
          </div>
        )}
        <p className="text-md font-semibold">게스트</p>
        <div className="text-sm">{placeholder}</div>
      </div>
      {/* 결제 수단 */}
      <div className="flex flex-col gap-4 border-b py-6">
        <div className="flex  justify-between items-center">
          <h2 className="text-xl">결제 수단</h2>
          <FaCcMastercard size={36} />
        </div>
        <CreditCardForm />
      </div>
      {/* 환불 정책 */}
      <div className="flex flex-col gap-4 border-b py-6">
        <h2 className="text-xl">환불 정책</h2>
        <p className="text-sm">
          <span className="font-semibold">
            1월 28일 전까지 무료로 취소하실 수 있습니다.
          </span>
          체크인 날짜인 2월 2일 전에 취소하면 부분 환불을 받으실 수 있습니다.
        </p>
      </div>
      {/* 기본 규칙 */}
      <div className="flex flex-col gap-4 border-b py-6">
        <h2 className="text-xl">기본 규칙</h2>
        <p className="text-sm">
          훌륭한 게스트가 되기 위한 몇 가지 간단한 규칙을 지켜주실 것을 모든
          게스트에게 당부드리고 있습니다.
        </p>
        <ul className="text-sm pl-2 spac">
          <li>숙소 이용규칙을 준수하세요.</li>
          <li>호스트의 집도 자신의 집처럼 아껴주세요.</li>
        </ul>
      </div>
      {/* 확인 및 결제 */}
      <div className="flex flex-col gap-4 border-b py-6">
        <small className="text-xs leading-5">
          아래 버튼을 선택하여도 실제 결제가 되지 않습니다.
          <br /> 해당 페이지는 학습용으로 제작되었으며 실제 신용카드 정보를
          입력하실 필요가 없습니다.
        </small>
        <Button
          label="확인 및 결제"
          onClick={handleSubmit}
          disabled={isPending}
        />
      </div>
    </div>
  );
};

export default PaymentInfo;
