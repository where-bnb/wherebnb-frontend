import { getCurrentUser } from "@/actions";
import Listings from "@/components/searchPage/listings/Listings";
import SearchMap from "@/components/searchPage/searchMap/SearchMap";

const SearchResultPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex flex-row">
      <div
        className="
          w-full
          lg:w-[60%]
          
        "
      >
        <div
          className="grid
          grid-cols-2
          xl:grid-cols-3
          gap-8
          pt-5
          relative
          px-6"
        >
          <Listings currentUser={currentUser} queryKey="/s" />
        </div>
      </div>
      <div
        className="
        hidden
        lg:block
        lg:w-[40%]
        h-[calc(100vh-260px)]
        sticky
        top-[260px]
        "
      >
        <SearchMap />
      </div>
    </div>
  );
};

export default SearchResultPage;
