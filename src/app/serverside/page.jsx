import { authOptions } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log("session", session);

  return <div>{session.user.name}</div>;
};

export default page;
