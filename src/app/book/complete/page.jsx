"use client";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const BookCompletePage = () => {
  const router = useRouter();
  return (
    <div className="">
      <main className="flex flex-col gap-4 justify-center items-center min-h-96">
        <div className="text-accent text-[90px]">COMPLETED 🎉</div>
        <h1 className="text-2xl">예약이 완료되었습니다.</h1>
        <div>
          <Button label="메인 페이지로" onClick={() => router.push("/")} />
        </div>
      </main>
    </div>
  );
};

export default BookCompletePage;
