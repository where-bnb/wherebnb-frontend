"use client";

import Container from "@/components/ui/Container";
import SearchBar from "./searchbar/SearchBar";
import SearchBarContainer from "./searchbar/SearchBarContainer";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import FilterButton from "../searchPage/filters/FilterButton";
import Categories from "../searchPage/categories/Categories";
import { DatePickerProvider } from "@bcad1591/react-date-picker";

const Navbar = () => {
  return (
    <DatePickerProvider>
      <div className="fixed w-full bg-white z-10">
        <Container>
          <div className="py-2">
            <div
              className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
                sm:mx-5
            "
            >
              <Logo />
              <div className="md:hidden">
                <SearchBar />
              </div>
              <UserMenu />
            </div>
            <div className="hidden md:block">
              <SearchBarContainer />
            </div>
          </div>
        </Container>
        <div
          className="
            flex
            flex-row
            w-[90svw]
            items-center
            justify-center
            gap-5
            border-t-[1px]
            border-neutral-200
        "
        >
          <Categories />
          <FilterButton />
        </div>
      </div>
    </DatePickerProvider>
  );
};

export default Navbar;
