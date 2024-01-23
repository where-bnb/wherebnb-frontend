"use client";

import { DatePickerProvider } from "@bcad1591/react-date-picker";
import SearchBar from "@/components/navbar/searchbar/SearchBar";
import SearchBarContainer from "@/components/navbar/searchbar/SearchBarContainer";
import Logo from "@/components/navbar/Logo";
import UserMenu from "@/components/navbar/UserMenu";
const SearchHeader = () => {
  return (
    <DatePickerProvider>
      <div className="py-2">
        <div
          className="
          flex
          flex-row
          items-center
          justify-between
          gap-3
          md:gap-0
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
    </DatePickerProvider>
  );
};

export default SearchHeader;
