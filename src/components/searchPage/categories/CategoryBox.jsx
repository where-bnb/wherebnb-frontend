"use client";

import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useCallback } from "react";

const CategoryBox = ({ icon, label, id, selected }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  // 카테고리 클릭 : query string에 category 추가
  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      category: id,
    };

    // 이미 카테고리가 선택되어있는 경우, 클릭 시 선택 해제 & query string 해제
    if (params?.get("category") === `${id}`) {
      delete updatedQuery.category;
    }

    // 쿼리 파라미터 갱신
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: updatedQuery,
      },
      { skipNull: true }
    );

    // 기존 쿼리 무효화, refetch
    queryClient.invalidateQueries([`${pathname}`]);

    // 페이지 이동
    router.push(url);
  }, [id, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        pt-6 
        p-3
        pb-0
        hover:text-neutral-800
        hover:opacity-100
        transition 
        cursor-pointer
        ${selected ? "text-neutral-800" : "text-neutral-500"}
        ${selected ? "opacity-100" : "opacity-50"}
    `}
    >
      <div className="w-[26px] h-[26px]">
        <Image src={icon} alt={label} width={26} height={26} />
      </div>
      <div
        className={`font-medium text-xs pb-3 border-b-2 whitespace-nowrap
        ${selected ? "border-b-neutral-800" : "border-transparent"}`}
      >
        {label}
      </div>
    </div>
  );
};

export default CategoryBox;
