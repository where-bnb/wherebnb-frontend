import { getCurrentUser } from "@/actions";
import Listings from "@/components/searchPage/listings/Listings";

const SearchResultPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex flex-row px-6">
      <div
        className="
          w-full
          lg:w-[60%]
          grid
          grid-cols-2
          xl:grid-cols-3
          gap-8
          pt-5
          relative
        "
      >
        <Listings currentUser={currentUser} queryKey="/s" />
      </div>
      <div
        className="
        hidden
        lg:block
        "
      >
        map
      </div>
    </div>
  );
};

export default SearchResultPage;
