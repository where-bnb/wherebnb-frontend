import Container from "../Container";
import Search from "./Search";

const SearchBar = () => {
  return (
    <div
      className="
        py-4
        md:w-auto
        flex
        flex-row
        justify-center
    "
    >
      <Search />
    </div>
  );
};

export default SearchBar;
