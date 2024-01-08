"use client";

import Container from "../Container";
import Search from "../searchbar/Search";
import SearchBar from "../searchbar/SearchBar";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4">
        <Container>
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
              <Search />
            </div>
            <UserMenu />
          </div>
          <div className="hidden md:block">
            <SearchBar />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
