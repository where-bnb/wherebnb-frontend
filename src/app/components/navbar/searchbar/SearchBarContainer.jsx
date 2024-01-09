import SearchBar from "./SearchBar";

const SearchBarContainer = () => {
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
      <SearchBar />
    </div>
  );
};

export default SearchBarContainer;
