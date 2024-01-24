import EmptyState from "@/components/searchPage/EmptyState";
import { getCurrentUser } from "@/actions";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/ui/Container";
import Listings from "@/components/searchPage/listings/Listings";

export default async function Home() {
  const isEmpty = false;
  const currentUser = await getCurrentUser();

  if (isEmpty) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <Navbar />
      <div
        className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  md:grid-cols-3
                  lg:grid-cols-4
                  xl:grid-cols-5
                  2xl:grid-cols-6
                  gap-8
                  pt-5
                  relative
                "
      >
        <Listings currentUser={currentUser} queryKey="/" />
      </div>
    </Container>
  );
}
