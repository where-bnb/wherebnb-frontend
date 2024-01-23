import { authOptions } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession(authOptions);
  return <div className="text-primary">hello, world</div>;
}
