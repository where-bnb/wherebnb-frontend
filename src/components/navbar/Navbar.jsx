import FilterButton from "../searchPage/filters/FilterButton";
import Categories from "../searchPage/categories/Categories";
import SearchHeader from "../ui/header/SearchHeader";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-10 pt-2">
      <SearchHeader />
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
  );
};

export default Navbar;
