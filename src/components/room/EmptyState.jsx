"use client";

import { useRouter } from "next/navigation";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

const EmptyState = ({
  title = "일치하는 데이터가 없습니다.",
  subtitle = "잠시 후 재시도 또는 필터를 제거해주세요.",
  showReset,
}) => {
  const router = useRouter();
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="모든 필터 제거하기"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
