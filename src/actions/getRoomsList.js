import { api } from "@/lib/axios";

export const getRoomsList = async (searchParams, pageParam) => {
  try {
    console.log("pageParam", pageParam);
    console.log("searchParams", searchParams);
    const {
      place,
      adults,
      children,
      infants,
      pets,
      price_min,
      price_max,
      min_bedrooms,
      min_beds,
      min_bathrooms,
      guest_favorite,
      property_type,
      amenities,
    } = searchParams;

    await new Promise((resolve) => setTimeout(resolve, 700));

    let list;
    if (
      !price_min &&
      !price_max &&
      !min_bedrooms &&
      !min_beds &&
      !min_bathrooms &&
      !guest_favorite &&
      !property_type &&
      !amenities
    ) {
      list = await api.get("/room/search", {
        params: {
          ...searchParams,
          page: pageParam,
        },
      });
    } else {
      list = await api.get("/room/filtered", {
        params: {
          ...searchParams,
          page: pageParam,
        },
      });
    }

    console.log(list);
    return list.data;
  } catch (error) {
    console.log("error!!!!", error);
    throw new Error(error);
  }
};
