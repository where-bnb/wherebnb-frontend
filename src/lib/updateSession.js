import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export const updateSession = async (newToken) => {
  const prevSession = await getServerSession(authOptions);
  const upadatedSession = { ...prevSession, accessToken: newToken };

  try {
    await signIn("tokenUpdate", { ...upadatedSession, redirect: false });
  } catch (error) {
    throw new Error(error);
  }
};
