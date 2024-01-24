import { api } from "@/lib/axios";
import { useSearchParams } from "next/navigation";
import qs from "query-string";

export const getRoomsList = async (searchParams, pageParam) => {
  try {
    console.log("pageParam", pageParam);
    console.log("searchParams", searchParams);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const list = await api.get("/room/search", {
      params: {
        ...searchParams,
        page: pageParam,
      },
    });
    console.log(list);
    return list.data;
  } catch (error) {
    console.log("error!!!!", error);
    throw new Error(error);
  }
};
