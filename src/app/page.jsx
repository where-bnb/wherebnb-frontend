"use client";
import FilterButton from "@/components/searchPage/FilterButton";
import Card from "@/components/searchPage/card/Card";
import Categories from "@/components/searchPage/categories/Categories";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <div>
      <Container>
        <div className="flex flex-row items-center justify-center px-4 gap-5">
          <Categories />
          <FilterButton />
        </div>
      </Container>
    </div>
  );
}
