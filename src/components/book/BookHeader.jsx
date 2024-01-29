"use client";
import { useRouter } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";

const BookHeader = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="max-w-screen-lg  mx-auto mt-12">
      <div className="flex gap-4 items-center">
        <IoChevronBack
          onClick={handleBack}
          size={24}
          className="text-neutral-500 hover:bg-neutral-200 rounded-full cursor-pointer"
        />
        <h2 className="text-3xl">확인 및 결제</h2>
      </div>
    </div>
  );
};

export default BookHeader;
