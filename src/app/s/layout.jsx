import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/ui/Container";

const SearchResultLayout = ({ children }) => {
  return (
    <div>
      <div
        className="
            max-w-[2520px]
            mx-auto
            xl:px-20
            md:px-10
            sm:px-2
            px-4
            sticky
            top-0
            z-10
            bg-white
        "
      >
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SearchResultLayout;
