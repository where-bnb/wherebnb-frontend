import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function getCurrentUserId() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return null;
    }

    return { id: session.user.userId };
  } catch (error) {
    return null;
  }
}
