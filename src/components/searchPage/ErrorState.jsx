"use client";

import { useRouter } from "next/navigation";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

const ErrorState = ({
  title = "문제가 발생했습니다.",
  subtitle = "페이지를 새로고침해주세요.",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div
      className="
    h-[60vh]
    flex
    flex-col
    gap-2
    justify-center
    items-center
    absolute
    top-[30%]
    w-[90%]
  "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button outline label="새로고침" onClick={() => router.push("/")} />
        )}
      </div>
    </div>
  );
};

export default ErrorState;
