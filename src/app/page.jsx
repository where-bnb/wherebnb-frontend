import EmptyState from "@/components/searchPage/EmptyState";
import ListingCard from "@/components/searchPage/listingCard/ListingCard";
import { getCurrentUser } from "@/actions";
import { getRoomsList } from "@/actions";
import Navbar from "@/components/navbar/Navbar";

export default async function Home() {
  const isEmpty = false;
  const currentUser = await getCurrentUser();

  const list = await getRoomsList();
  console.log("user", currentUser);

  if (isEmpty) {
    return <EmptyState showReset />;
  }

  return (
    <>
      <Navbar />
      <div className="md:pt-[260px] pt-[180px]">
        <div
          className="
                  pt-5
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  md:grid-cols-3
                  lg:grid-cols-4
                  xl:grid-cols-5
                  2xl:grid-cols-6
                  gap-8
                "
        >
          {list &&
            list.map((room) => (
              <ListingCard
                key={room.id}
                id={room.id}
                room={room}
                currentUser={currentUser}
              />
            ))}
        </div>
      </div>
    </>
  );
}
