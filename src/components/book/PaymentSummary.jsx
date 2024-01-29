import Image from "next/image";

const PaymentSummary = ({
  dayOfStay,
  totalPrice,
  propertyName,
  propertyPhoto,
  propertyType,
  pricePerDay,
}) => {
  return (
    <div className="order-first md:order-last md:col-span-3">
      <section className="border rounded-md p-4 space-y-5 sticky top-10">
        <div className="flex gap-2">
          <Image
            src={propertyPhoto}
            alt="summary-img"
            width={100}
            height={100}
            className="rounded-md"
          />
          <div className="space-y-2">
            <p className="text-neutral-500 text-xs">{propertyType}</p>
            <p className="text-sm leading-4">{propertyName}</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">요금 세부정보</h2>
          <div className="flex justify-between text-sm">
            <div>
              ₩{pricePerDay} x {dayOfStay}박
            </div>
            <div>₩{totalPrice.toLocaleString()}</div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between font-semibold">
            <div>총 합계 (KRW)</div>
            <div>₩{totalPrice.toLocaleString()}</div>
          </div>
        </div>
        <hr />
        <div className="text-xs text-neutral-500">
          해외에서 결제가 처리되기 때문에 카드 발행사에서 추가 수수료를 부과할
          수 있습니다.
        </div>
      </section>
    </div>
  );
};

export default PaymentSummary;
