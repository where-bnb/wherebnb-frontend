import { api } from "@/lib/axios";
import { cache } from "react";

export const getRoomsList = cache(async () => {
  const list = await api.get("/rooms");

  return list.data;
});
