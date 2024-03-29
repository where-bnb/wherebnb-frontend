"use server";
import { authApi } from "@/lib/axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getSession();

    const currentUser = await authApi.get(`/users/${session.user?.userId}`);
    if (!currentUser) {
      return null;
    }

    return currentUser.data;
  } catch (err) {
    return null;
  }
}
