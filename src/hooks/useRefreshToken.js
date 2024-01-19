"use client";

import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";

export const useRefreshToken = () => {
  const { data: session } = useSession();

  const refreshToken = async () => {
    const res = await api.post("/auth/refresh", {
      refreshToken: session?.refreshToken,
    });
    console.log("newtoken", res.data.NewAccessToken);
    if (session) session.accessToken = res.data.NewAccessToken;
  };

  return refreshToken;
};
