"use client";

import Container from "@/app/components/ui/Container";
import SearchBar from "./searchbar/SearchBar";
import SearchBarContainer from "./searchbar/SearchBarContainer";
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
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
