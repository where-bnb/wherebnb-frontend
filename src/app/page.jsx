"use client";

import EmptyState from "@/components/searchPage/EmptyState";
import ListingCard from "@/components/searchPage/listingCard/ListingCard";
import { useSession } from "next-auth/react";

export default function Home() {
  const isEmpty = false;
  const { data: session, status } = useSession();

  if (isEmpty) {
    return <EmptyState showReset />;
  }

  return (
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
      <ListingCard currentUser={session?.user} />
      <ListingCard currentUser={session?.user} />
      <ListingCard currentUser={session?.user} />
      <ListingCard currentUser={session?.user} />
      <ListingCard currentUser={session?.user} />
      <ListingCard currentUser={session?.user} />
    </div>
  );
}
